---
title: Ungoogled Android
layout: post
date: 2018-12-27 08:45:14
tags:
  - android
  - privacy
  - foss
assets:
  image: ./Ungoogled-Android/kick-google-out.png
---

For a good while now I've been running my Android phone with no Google Apps, and I don't regret trying it out. It's a really good experience without it. Want to learn how to ungoogle your Android as well? This post is for you.

<!-- more -->

### What You Should Know

To follow this tutorial, you will need to wipe your device and flash custom firmware on it. This means your current OS, all apps and data will be permanently erased. Vendor-specific apps or software features, such as Samsung's Pen support might be unavailable in some custom ROMs. Check for compatibility issues before flashing. If you mess something up, you could lose data or in the worst case turn your device into an expensive paperweight. If you don't know what you are doing, don't do it. You can receive guidance from many places, such as [Reddit](https://reddit.com/r/LineageOS) or the [XDA forums](https://forums.xda-developers.com).

### Backups!

First step of every tutorial that includes wiping your device as a step: make backups! Backup everything twice! To download your existing data from Google servers, head over to [takeout.google.com](https://takeout.google.com) to export your e-mails, calendar events, notes etc.

### Installing a Custom OS

While Android is officially open-source, almost every device you will encounter has proprietary pieces of software, such as modified parts of the Android UI and most famously Google Play and all other preinstalled Google Apps (will be referred to as GApps, not to be confused with Google's enterprise productivity suite). To get rid of those, a custom firmware or custom ROM, which source code is public, will be installed. There are usually a bunch of ROM choices for each device, but one of the most popular, especially for privacy geeks, is [LineageOS](https://lineageos.org). LineageOS is completely open-source, close to stock Android but with baked-in privacy tools and some other nifty features. Last heads up: flashing this OS on your device will get rid of all your currently existing data, including apps. You won't be able to use Bixby on your fancy Samsung anymore, just as if you wouldn't be able to reach for Cortana if you installed Linux on your Windows machine.

Installation varies for each device a fair bit. Thankfully, instructions are usually given by the ROM's creator. You can find downloads as well as per-device tutorials for LineageOS on the [website](https://download.lineageos.org). It should be noted though, that on the official website, downloads are only provided for devices maintained by the core team. Odds are high that your device isn't officially supported, but don't sweat. A web search or search on the XDA forums for your device plus LineageOS should return ROMs maintained by independent developers. Before installing those though, check if all sources are truly public, have a look at known bugs and study some comments to make sure you are not downloading hot garbage on your shiny new phone.

Warning: you are currently downloading your firmware from some dudes on the internet. While not beginner-friendly, it is recommended that you build LineageOS yourself. This won't be covered here though as it's a big topic for itself, but the LineageOS wiki has some great info about the subject.

### Setting Up LineageOS

When booting your device for the first time, you will be greeted by a launcher showing only a rudamentary list of apps. As there is no Google Play Store, an alternative for finding apps is needed. [F-Droid](https://fdroid.org) is a FOSS-only app store curating a decent selection of applications we will later take advantage of.

Firstly, there are some other things to consider before though. Nowadays, Google Services are kind of expected to run Android smoothly and a lot of functionality from Android has been merged to Google Services. For instance, your GPS data will be quite inaccurate before you install location services from F-Droid, such as the one by Mozilla - so don't forget doing that or navigation will be a difficult task.

### The Own Ecosystem

Google is not just present on your phone, it is an entire ecosystem. This in particular is oftenly holding people back from ungoogling their devices, and to me it was the same too. Missing out on cloud syncing for calendar, contancts, tasks and files with apps for all your devices truly would be a bummer. Fortunately, there is Nextcloud, which I wrote some blog posts about before. In a nutshell, it is an encrypted, privacy-friendly self-hosted cloud that also provides a CalDAV/CardDAV/WebDAV interface which is widely adopted by many different apps across device types. We too will use that interface later to connect our phone with Nextcloud. While you should host it yourself there are also offerings from Nextcloud providers, if you are a fan of premade solutions.

### Apps for Your Data

As mentioned in the beginning, there are plenty of alternatives for GApps. For Chrome, there is [Bromite](https://www.bromite.org), a fork of Chromium with all Google parts removed. Additionally, it packs in an adblocker and has a wider variety of default search engines - please do not pick Google as here. To download it via the F-Droid client, you need to [manually add its repo](https://www.bromite.org/fdroid). Alternatively, you could use [Fennec](https://f-droid.org/de/packages/org.mozilla.fennec_fdroid/), a fork of Firefox. Browser-wise you actually have quite some choice here.

As far as calendars go, your choice will be rather limited, unfortunately. There is [Etar](https://f-droid.org/de/packages/ws.xsoh.etar/) and [Simple Calendar](https://f-droid.org/de/packages/com.simplemobiletools.calendar/), both are quite basic, with Simple Calendar having ironically more "advanced" features. Try both of them and keep the one you prefer. Both though require [DAVdroid](https://f-droid.org/de/packages/at.bitfire.davdroid/) to sync events with your Nextcloud instance. DAVdroid also syncs your contacts, which can be managed and called using the built-in contacts and dialer app from LineageOS. If you don't get any text messages at all or just swipe them away anyhow the default will again do you just fine. For me though, the "Mark as read" button in the notification decides that I rather take [QKSMS](https://f-droid.org/de/packages/com.moez.QKSMS/), a very decent messaging app.

For tasks, [Tasks.org](https://f-droid.org/de/packages/org.tasks/) is really good. You should know though that this app is suited more for actual things you have to do with included (of course optional) progress tracking, attatchments etc. For shopping lists, I'd go with something else. DAVdroid is not required for this app as it uses its own DAV connector to synchronize data with Nextcloud.

There are plenty of note apps as well available on F-Droid, but I went with [Nextcloud Notes](https://f-droid.org/de/packages/it.niedermann.owncloud.notes/), as it easily integrates with the cloud. It's by far not the best, but for what I use it, it's usable. If you don't need syncing, take a look at [Scarlet](https://f-droid.org/de/packages/com.bijoysingh.quicknote/) which has a much more rounded feature set.

While contacts, calendar events and tasks are all synced now, photos and files are still missing. The official [Nextcloud app](https://f-droid.org/de/packages/com.nextcloud.client/) can do both, replacing Google Drive and Google Photos. I also use it to sync music stored on Nextcloud to my device, playing it back with the really slick [Vinyl Music Player](https://f-droid.org/de/packages/com.poupa.vinylmusicplayer/) replacing Google Play Music.

For Google Maps there are two alternatives: [OsmAnd~](https://f-droid.org/de/packages/net.osmand.plus/) and [Maps](https://f-droid.org/de/packages/com.github.axet.maps/). Both are decent, so try out which one you prefer. Unlike Google Maps, their searches are somewhat limited though - while you are able to find most restaurants, ATMs etc. thanks to the active OpenStreetMaps community, opening hours, menus, ratings etc. you are used to in Google Maps are missing. Make sure to also download maps before you travel somewhere or you might get stranded.

### Apps for Foreign Data

Finding apps that require data from foreign sources, especially from proprietary services becomes a little bit more challenging. I can say positively that there are a decent amount of good apps, such as [Slide](https://f-droid.org/de/packages/me.ccrama.redditslide/), the best Reddit client available, or [Transportr](https://f-droid.org/de/packages/de.grobox.liberario/), a good public transport companion.

Unfortunately, proprietary services with no or a limited API are all too common. While there are open-source apps for some of those, like [Twidere](https://f-droid.org/de/packages/org.mariotaku.twidere/) for Twitter, or [NewPipe](https://f-droid.org/de/packages/org.schabi.newpipe/) and [SkyTube](https://f-droid.org/de/packages/free.rm.skytube.oss/) for YouTube, but to put it lightly, they leave a lot to be desired.

Not to mention all the apps that don't even exist as open-source alternatives. There's no Instagram or Snapchat - while I don't need either of those two, the lack of WhatsApp is quite a drag here in Germany (though there is a [Matrix bridge](https://matrix.org/docs/projects/as/mautrix-whatsapp.html)).

### Some Other Random Apps I Like

Modified from an [older post](/2018/08/08/My-efforts-towards-privacy/).

- [AdAway](https://f-droid.org/de/packages/org.adaway/) blocks ads at host-level, root required
- [Amaze](https://f-droid.org/de/packages/com.amaze.filemanager/) is my filemanager of choice
- [AntennaPod](https://f-droid.org/de/packages/de.danoeh.antennapod/) I use to listen to podcasts
- [AnySoftKeyboard](https://f-droid.org/packages/com.menny.android.anysoftkeyboard/) is a highly customizable keyboard - I prefer using [Gboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en) with network access, notifications and all other permissions disabled though
- [Camera Roll](https://f-droid.org/de/packages/us.koller.cameraroll/) is a much more beautiful gallery app compared to the default LineageOS one
- [Feeder](https://f-droid.org/de/packages/com.nononsenseapps.feeder/) is a decent RSS reader
- [FreeOTP+](https://f-droid.org/de/packages/org.liberty.android.freeotpplus/) handles my two factor authentication codes
- [Keepass2Android](https://github.com/PhilippC/keepass2android) is a powerful password manager
- [Obsqr](https://f-droid.org/de/packages/trikita.obsqr/) is used to scan QR codes
- [VLC](https://www.videolan.org/vlc/download-android.html) is a good media player

### Conclusion

Having read this, you should have a good foundation getting you into Android without Google. Honestly - it's not hard, can be done by everyone and you won't miss much. If you are a tinkerer though, you'll enjoy the freedom and customizability that open-source and pure Android allows. Simply give it a try and enjoy your ungoogled Android!

_A shortened version of this post was held as a [lightning talk at 35C3](https://media.ccc.de/v/35c3-37-jugend-hackt-lightning-talks) (German)_
