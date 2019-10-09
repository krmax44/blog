---
title: My Current Projects
layout: post
date: 2019-10-09 15:35:20
tags:
  - projects
  - open-source
assets:
  image: ./my-projects.svg
slug: My-Current-Projects
---

It's Hacktober time and like every wanna-be open-sourceror, I have started way too many projects without realizing that steady maitanance is actually somewhat time-consuming. Nonetheless, here are some of the projects I'm currently working on.

<!-- more -->

### Contently

<BadgeButton to="https://github.com/krmax44/contently" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/contently" icon="npm">Package</BadgeButton>

Probably the biggest project I have started recently. Contently takes your content and transforms it into a consumable API, perfect for your JAMstack site. Take a look at the following example:

```
📦 current working directory
 ┣ 📂 posts
 ┃ ┣ 📄 Hello-World.md
 ┃ ┣ 📄 Second-Post.md
 ┣ 📂 content
```

You can now use Contently like this to turn it into a JSON API:

```js
const Contently = require('contently');
const ContentlySourceFs = require('contently-source-fs');
const ContentlyTransformMarkdown = require('contently-transform-markdown');
const ContentlyJsonApi = require('contently-json-api');

new Contently()
  .use(ContentlySourceFs, { patterns: ['posts/*.md'] })
  .use(ContentlyTransformMarkdown)
  .use(ContentlyJsonApi)
  .run()
  .then(data => console.log('Done!', data));
```

Now you have:

```
📦 current working directory
 ┣ 📂 posts
 ┃ ┣ 📄 Hello-World.md
 ┃ ┣ 📄 Second-Post.md
 ┣ 📂 content
 ┃ ┣ 📄 hello-world.json
 ┃ ┣ 📄 second-post.json
```

With the JSON files looking like this:

```json
{
  "slug": "hello-world",
  "data": "<h1>Hello World</h1>\n<p>Hello from Contently!</p>\n",
  "attributes": {
    "createdAt": "2019-09-06T11:51:55.052Z",
    "modifiedAt": "2019-09-06T11:51:55.052Z",
    "title": "Hello-World"
  },
  "assets": []
}
```

You can also write plugins pretty easily based on the hook architecture, which brings me nicely to my next project, that is used extensively by Contently.

---

### Houk

<BadgeButton to="https://github.com/krmax44/houk" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/houk" icon="npm">Package</BadgeButton>

Houk is a tiny and simple event bus made for hook chains.

```js
import { HoukBus } from 'houk';

const bus = new HoukBus();
bus.on('newUser', user => user.toUppercase()); // eventName, listenerFn

const user = await bus.emit('newUser', undefined, 'max'); // eventName, thisArg, ...args

console.log(user); // MAX
```

You can also take Houk to extend your existing class instead of using a global event bus. This way, emitting events is only allowed for deriving classes, which works really well in a TypeScript environment.

---

### Always Array

<BadgeButton to="https://github.com/krmax44/always-array" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/always-array" icon="npm">Package</BadgeButton>

This project is even simpler. All it does is making sure you're dealing with an array.

```js
import alwaysArray from 'always-array';

alwaysArray('foo'); // ['foo']
alwaysArray(['foo']); // ['foo']
```

---

### Git File Stats

<BadgeButton to="https://github.com/krmax44/git-fstat" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/git-fstat" icon="npm">Package</BadgeButton>

Super simple once again. Does what the name implies.

```js
import gitFstat from 'git-fstat';

await gitFstat('My file.txt');

/*
{
  createdAt: Date,
  modifiedAt: Date,
  changes: number
}
*/
```

Of course, this only works within a Git repository - but how would one know if this is currently the case? Introducing...

---

### Is Repo

<BadgeButton to="https://github.com/krmax44/is-repo" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/is-repo" icon="npm">Package</BadgeButton>

Just checks whether a given path is a Git repository.

```js
import isRepo from 'is-repo';

await isRepo(); // defaults to process.cwd()
await isRepo('path/to/repo'); // true || false
```

You might be wondering why I've created these libraries. The answer is that all packages I've found that offer similar functionality are either not well tested, not typed (so don't play well with TypeScript), too large in file-size or outdated.

---

### Taggler

<BadgeButton to="https://github.com/krmax44/taggler" icon="github">Repository</BadgeButton>
<BadgeButton to="https://npm.im/taggler" icon="npm">Package</BadgeButton>

Taggler is a <abbr title="Klieh">CLI</abbr> that quickly equips your local music files (usually obtained from an... offsite backup) with high quality ID3 tags. Currently, it only supports Spotify as a data source and `ffmpeg` as a writer, but it's designed so that these modules can be swapped for different ones. You can try it using `npx`:

```bash
npx taggler "Smash Mouth - All Star.mp3"
```

---

If you find any of these projects interesting, feel free to fork and improve them. Any contributions are very welcome.