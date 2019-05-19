---
title: Nextcloud Impressions
layout: post
date: 2018-09-19 18:24:41
tags:
  - privacy
  - nextcloud
assets:
  image: ./Nextcloud-Impressions/nextcloud.svg
---

In [one of my recent posts](/2018/08/08/My-efforts-towards-privacy/), I stated that I ditched Google for privacy reasons. Having used their services for doing calendar, file syncing, note taking and task tracking activities, this left me kind of stranded. Luckily, there is Nextcloud that steps into place and saves the day. Here are my impressions from using it for about a month now.

<!-- more -->

### What is Nextcloud?

Nextcloud is a really cool piece of software. It's written in PHP, so you will need a server (but that's the whole point) and it's basically a selfhosted cloud. It gives you file, calendar and task syncing and much more - especially when you factor in that you can install apps to expand its feature set even further. Thanks to WebDAV and CalDAV, it is widely compatible with already existing apps on many platforms. Nextcloud allows you to fully encrypt all your data, making an exceptional secure and private cloud solution.

### Nextcloud? Sounds like OwnCloud.

Nextcloud is a fork of OwnCloud that was created because of some [business shenanigans](https://owncloud.com/owncloud-statement-concerning-formation-nextcloud-frank-karlitschek/). For me, it just came down to the fact that Nextcloud enjoys a more active community, so there you go. Check out [this Reddit thread](https://www.reddit.com/r/privacytoolsIO/comments/825s4w/nextcloud_vs_owncloud_which_one_is_superior_for/) for more info.

### Awesome apps

Firstly, let me show you some really nice apps for the Nextcloud server/web interface itself:

- [Calendar](https://apps.nextcloud.com/apps/calendar), [Contacts](https://apps.nextcloud.com/apps/contacts) and [Tasks](https://apps.nextcloud.com/apps/tasks) are great frontends for the Nextcloud DAV server
- [Notes](https://apps.nextcloud.com/apps/notes) is a decent app for light note taking
- [AudioPlayer](https://apps.nextcloud.com/apps/audioplayer) is what I use for playing music via the web interface. It's the best I found but far from perfect, so I usually sync the files and use a local media player like VLC.
- [KeeWeb](https://apps.nextcloud.com/apps/keeweb) is great for KeePass users who want to be able to access their passwords from the web interface. It's a bit hacky as you'll need to [edit some files](https://github.com/jhass/nextcloud-keeweb/issues/67#issuecomment-354250179) and [change your mimetype bindings](https://github.com/jhass/nextcloud-keeweb/issues/34#issuecomment-278634544), but once that's done, you can simply open any `*.kbdx` file and it will be opened in a [Keeweb](https://keeweb.info/) window.

For my Android phone, these programs turned out to be quite useful:

- [DAVDroid](https://f-droid.org/de/packages/at.bitfire.davdroid/) syncs calendar and contacts. Setting it up is made easy with the help of the [Nextcloud](https://f-droid.org/de/packages/at.bitfire.davdroid/) app.
- Speaking of it, the official [Nextcloud](https://f-droid.org/de/packages/at.bitfire.davdroid/) app is a must as well, coming with neat features like folder syncing and automatic camera uploads similar to Google Photos, it gives you easy access to your Nextcloud instance.
- [Tasks](https://f-droid.org/de/packages/org.tasks/) is a seriously good little program - leaps better than what Google's messy line-up of various apps can offer.
- For calendar purposes, I use [Simple Calendar](https://f-droid.org/de/packages/com.simplemobiletools.calendar/). I also tried [Etar](https://f-droid.org/de/packages/ws.xsoh.etar/), which I find a touch better looking, but Simple Calendar has (ironically) more advanced features.
- I'm also using the [Nextcloud Notes companion app](https://f-droid.org/de/packages/it.niedermann.owncloud.notes/) - and just like the web version, it's okay for light note taking, but also packs in some annoying bugs and the overall Markdown implementation is not that great.
- [Vinyl Music Player](https://f-droid.org/de/packages/com.poupa.vinylmusicplayer/), which is a fork of [Phonograph](https://play.google.com/store/apps/details?id=com.kabouzeid.gramophone) created to deal with lately added paywalls, is used to play my music that I'm syncing to my SD card using the Nextcloud app. Unfortunately, there aren't any good apps that integrate more directly with Nextcloud.
- [Keepass2Android](https://github.com/PhilippC/keepass2android) is a feature-rich KeePass client, that can connect to Nextcloud using WebDAV. With features like auto-fill and quick unlock, the experience is just as good or better than any commerical options.

### What's it like to use it?

For me, it's near perfect. I've found apps that are as good or better than the ones I used before without sacrificing privacy or security. And I'd even recommend it to people who are not as tech-savvy. There are plenty of Nextcloud hosting offerings that should make it as easy to use as the equivalents from Google and others. I really don't have much to say here, other than you should definitely try it - not "just" to gain back control over your data, but also because unlike Google and their army of different tasks and email apps, Nextcloud delivers a great experience, is focused on the user and lets you customize it to your needs.
