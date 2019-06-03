---
title: Backup and Archive Your Projects in an Elegant Way
layout: post
date: 2019-06-02 01:13:02
tags:
  - backup
  - nextcloud
assets:
  image: ./Backup-Projects-Elegantly/backup.svg
---

Thanks to cloud storage and sync utilities, backing up important files has become much more easy and seamless in recent years. What works great with documents, photos and what have you doesn't though with code projects. Git, thousands of tiny files and the ever heavy `node_modules` folder do not play nicely with most file syncing programs - but I have a solution!

<!-- more -->

### A Simple Script

Let's say we have a projects folder like this:

```
📦 projects
 ┣ 📂 lame-game
 ┃ ┣ 📂 .git
 ┣ 📂 crappy-app
 ┣ 📂 abandoned-project
 ┣ 📂 blog-noone-reads
```

The goal is:

- Every project should be backed up.
- In case it's a Git repo, all branches should also be archived.
- Small filesizes: ZIP compression, ignore `node_modules` etc.

So here's the magic script that does all of the above:

```bash
# create a backup folder
mkdir backup -p

# current date in form YYYY-MM-DD--HH-MM-SS
datetime=`date '+%Y-%m-%d--%H-%M-%S'`

# for every subfolder
for D in `find . -maxdepth 1 -type d`; do
  # if it's the projects folder or the backup folder, ignore it
  if [ $D = "." ] || [ $D = "./backup" ]; then
    continue

  # if it's not a git repo, simply zip it
  elif [ ! -d "${D}/.git" ]; then
    # remove "./" from path
    project=${D:2}

    file="${project}-${datetime}.zip"
    zip -r ${file} ${D} -x "**/node_modules/*"
    mv ${file} ./backup/

  # if it's a git repo, use git archive
  else
    # remove "./" from path
    project=${D:2}

    # create a backup folder for the project
    mkdir backup/${project} -p

    # into the project's folder
    cd ${D}

    # for every branch of the repo
    git for-each-ref --format='%(refname:short)' refs/heads | \
    while read branch; do
      # replace "/" with "-"
      branchpath=../backup/${project}/${branch//\//-}

      # create a branch folder within the project's backup folder
      mkdir ${branchpath} -p

      # archive the branch
      git archive --format zip --output ${branchpath}.zip $branch
    done

    cd ../

    # zip the branch backups so we get one file for the repo
    zip -r -j ./backup/${project}-${datetime}.zip ./backup/${project}/

    # delete the backup folder
    rm ./backup/${project}/ -r

  fi
done
```

Executing the script will result in the following files being generated:

```
📦 projects
 ┣ 📂 backup
 ┃ ┣ 🗄 lame-game.zip
 ┃ ┣ 🗄 crappy-app.zip
 ┃ ┣ 🗄 abandoned-project.zip
 ┃ ┣ 🗄 blog-noone-reads.zip
```

If we open up `lame-game.zip`, which is a backed-up Git repo, we will see all of it's branches in individual archives:

```
🗄 lame-game.zip
 ┣ 🗄 master.zip
 ┣ 🗄 boss-level.zip
 ┣ 🗄 dev.zip
```

All that's left to do is adding the `backup` folder to your syncing program, which in my case is Nextcloud:

![Sync](./Backup-Projects-Elegantly/sync.png)

### Results

If I was to simply upload my projects folder, that would be a whopping 5.3 gigabytes and nearly 600,000 files - with my upload speed of 6 mbit/s, that would take more than two hours to upload under ideal conditions (600,000 small files are not ideal). Which is still more by the way than the time it took me to write the script, let it run (only takes about 10 seconds) and upload the very managable 60 megabytes of zip files.

Furthermore, due to the simplicity of the script, it can easily be modified to fit your needs. Use `cron` to backup daily or add a Webhook that turns on the lights or [gives you an electric shock](https://pavlok.com) after each archival process - the sky's the limit. Personally, I'm very happy with this solution.
