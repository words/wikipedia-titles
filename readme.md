# wikipedia-titles 

13 million English Wikipedia article titles, searchable on the command line.

## Installation

This module requires Node.js 7 or higher, because it uses async functions.

```sh
npm i wikipedia-titles
```

A postinstall script will download title data from Wikipedia. This file is 
around 73MB gzipped, and 273MB unzipped.

## Programmatic Usage

```js
const stream = require('wikipedia-titles')
stream
  .on('data', (title) => {
    console.log(title)
  })
  .on('end', () => {
    console.log('done!')
  })
```

## CLI Usage

Install it globally:

```sh
npm i -g wikipedia-titles
```

Now you'll have a command called 
`wikipedia-titles` on your PATH, and another called `wt` for convenience.

Count all titles:

```sh
wt | wc -l
13556168
```

You can optionally specify a string to match. Results are not case sensitive.

```sh
wt magnetism

Animal_magnetism
Antiferrimagnetism
Antiferromagnetism
Archaeomagnetism
Asperomagnetism
Bio-magnetism
Bioelectromagnetism
Biomagnetism
...
```

Pass the `--urls` option for full URLs. If you're using a fancy terminal like
[Hyper](https://hyper.is) or [VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal).

```
wt solar --urls    

https://en.wikipedia.org/wiki/.solar
https://en.wikipedia.org/wiki/160-minute_solar_cycle
https://en.wikipedia.org/wiki/1859_solar_superstorm
https://en.wikipedia.org/wiki/1878_solar_eclipse
https://en.wikipedia.org/wiki/1919_solar_eclipse
https://en.wikipedia.org/wiki/1986_solar_eclipse
https://en.wikipedia.org/wiki/2009_solar_eclipse
https://en.wikipedia.org/wiki/2013_Kerala_solar_panel_scam
https://en.wikipedia.org/wiki/2017_US_solar_eclipse
...
```

Using `open` and [`pick`](https://robots.thoughtbot.com/announcing-pick), you
can pipe results into a keyboard-selectable set.

```
open $(wt electromagnet --urls | pick)
```

## Dependencies

- [byline](https://github.com/jahewson/node-byline): simple line-by-line stream reader
- [minimist](https://github.com/substack/minimist): parse argument options
- [nugget](https://github.com/maxogden/nugget): minimalist wget clone written in node. HTTP GETs a file and saves it to the current working directory

## Dev Dependencies

- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [semantic-release](https://github.com/semantic-release/semantic-release): Automated semver compliant package publishing
- [travis-deploy-once](https://github.com/semantic-release/travis-deploy-once): Run a deployment script only once in the Travis test matrix

## License

MIT
