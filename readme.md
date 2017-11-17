# wikipedia-titles 

13 million English Wikipedia article titles, searchable on the command line.

## Installation

```sh
npm i -g wikipedia-titles
```

A postinstall script will download title data from Wikipedia. This file is 
around 73MB gzipped, and 273MB unzipped.

## Usage

If you install the module globally, you'll have a command called 
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
[Hyper]()

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

None

## License

MIT
