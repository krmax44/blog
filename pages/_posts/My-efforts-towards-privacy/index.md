---
title: My efforts towards privacy
layout: post
date: 2018-08-08 19:59:15
tags: privacy
assets:
  image: ./kick-google-out.png
slug: My-Efforts-Towards-Privacy
---

Recently, I started caring more about my privacy. As I found it to be rather tough to find alternatives to the services I was already using, I decided to write this post listing alternative apps and services.

<!-- more -->

### Some key concerns

First of all, let's talk about trust. There's usually always someone you will have to trust. If you use a closed-source, proprietary software or service (like Google Search or Microsoft Windows), you'll have to trust them that they won't do something bad with your data. If you use an open-source software or service (like Mozilla Firefox), you'll have to trust them that the provided builds are actually created using the public source code. If you build it yourself, you'll have to trust your compiler and so on. Second, open-source is key. Prefer using open-source software over closed software, whenever possible.

### Online services

Google got immediately replaced with [DuckDuckGo](https://duckduckgo.com), which is by no means the best in terms of privacy, but I figured that it had the best mix between privacy and features - though, it's still crazy how much better Google overall is.

To replace Google Contacts, Calendar, Keep, Play Music and Drive, I firstly exported all of my data using [Google Takeout](https://takeout.google.com) and then imported it in [Nextcloud](https://nextcloud.com) that I installed on one of my servers. Thanks to the WebDAV-integration of Nextcloud, I can still sync all of my data across devices. I have already switched from Gmail to my own domain some years ago, but still had it active as a separate inbox as it gets a mail every couple of days - now, I set it to redirect everything to my main address.

### Android apps

I already was using LineageOS on my Samsung Galaxy A5 2015, so I flashed it again without installing Google Apps. Personally, I think Chrome is the best Android browser, but I didn't want to use a Google product - [Bromite](https://www.bromite.org/) therefore was my solution. It's basically Chrome, but with some built-in privacy sauce, like a ready to used ad blocker. Speaking of ad blockers, I also installed [AdAway](https://adaway.org/) to completely block all unwanted requests.

As Play Store replacements go, there is [F-Droid](https://f-droid.org), a repository/app store of free and open-source software (FOSS). If you do need to download some Play Store exclusive apps (maybe some you've even purchased), there's the [Aurora Store](https://f-droid.org/de/packages/com.dragons.aurora/), which is basically an open-source replica of the Play Store.

Some apps still need Google Play Services though. An open-source re-implementation is [microG](https://microg.org), which is still in alpha and has some key features like Cast missing, but it's still very handy to have.

For YouTube, you can use [NewPipe](https://github.com/TeamNewPipe/NewPipe), which is decent, but the subscription feed is a little broken. There's still room for improvement in my opinion, but by far the best open-source client.

Some other random apps that I ended up liking:

- [Amaze](https://f-droid.org/de/packages/com.amaze.filemanager/) is my filemanager of choice
- [AntennaPod](https://f-droid.org/de/packages/de.danoeh.antennapod/) I use to listen to podcasts
- [AnySoftKeyboard](https://f-droid.org/packages/com.menny.android.anysoftkeyboard/) is a highly customizable keyboard
- [DAVdroid](https://f-droid.org/de/packages/at.bitfire.davdroid/) syncs my [Nextcloud](https://f-droid.org/de/packages/com.nextcloud.client/) stuff
- [FreeOTP+](https://f-droid.org/de/packages/org.liberty.android.freeotpplus/) handles my two factor authentication codes
- [Simple Calendar](https://f-droid.org/de/packages/com.simplemobiletools.calendar/) fulfills my basic calendar needs
- [Simple Notes](https://f-droid.org/de/packages/com.simplemobiletools.notes/) is usable for well - simple stuff. I'm still looking for something better, maybe one that offers Markdown and Nextcloud-syncing.
- [OsmAnd~](https://f-droid.org/de/packages/net.osmand.plus/) probably the best open-source navigation app. It uses OpenStreetMap which is decent and maybe even better for hiking, but Google Maps is a lot better.
- The pro version of [Slide](https://f-droid.org/de/packages/me.ccrama.redditslide/), the best Reddit app for Android, that costs in the Play Store, is completely free on F-Droid
- [Transportr](https://f-droid.org/de/packages/de.grobox.liberario/) is a public transportation app that works well enough with the Deutsche Bahn in Germany
- [VLC](https://www.videolan.org/vlc/download-android.html), although not available on F-Droid, is a good media player
- I use the e-mail, camera, calculator and gallery app shipped with LineageOS

### Desktop

Unfortunately, I can't move fully away from Windows. Most games and some apps are sadly still not supported on Linux. So to make my situation a little better until I get Linux up and running, I installed [Win10Privacy](https://www.winprivacy.de) and enabled everything possible.

I switched my browser from Chrome to [Firefox](https://firefox.com) and installed some privacy add-ons like [uBlock Origin](https://addons.mozilla.org/de/firefox/addon/ublock-origin/) and with every privacy-related setting dialed to the max, I was good to go.

My editor of choice [VS Code](https://code.visualstudio.com/) is thankfully open-source, and so are most of the tools that I use every once in a while, but for the MS Office and Adobe suite I still have to no open-source replacements for.

That's basically it! Still a bit rough especially in the desktop department, but I'm on it. If you have some awesome FOSS software or services to share, please let me know via a tweet or an e-mail (where I also need to get PGP up and running).
