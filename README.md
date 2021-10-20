# p5-ps-template

Starter repo for a p5 project using TypeScript for the sketch language.

# Installing

```
$ git clone https://github.com/mckoss/p5-ts-template my-project
$ cd my-project
$ npm install
```

$ Running from VS-Code

The best way to use this repo is to edit your sketch in VS-Code and use
the Live Server extension (by Ritwick Dey).

If so - you can remove the line in index.html that includes the `live.js` script.

```
$ npx tsc --watch
$ code .
```

Open `src/sketch.ts` and edit your sketch.  The TypeScript compile will watch
for changes, and update `scripts/sketch.js` - the compiled version of your
sketch.

Live Server will then automatically refresh your browser to show the revised sketch.

