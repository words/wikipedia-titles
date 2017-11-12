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
`wikipedia-titles` on your PATH, and another called `wt` for convenience:

Count all titles:

```sh
wt | wc -l
13556168
```

Display all titles that include "magnetism":

```sh
wt magnetism

Ampere's_laws_of_electromagnetism
Animal_magnetism
Animal_magnetism_(disambiguation)
Antenna_(electromagnetism)
Antiferrimagnetism
Antiferromagnetism
Archaeomagnetism
Asperomagnetism
Bio-magnetism
Bioelectromagnetism
Biomagnetism
...
```

## Dependencies

- [byline](https://github.com/jahewson/node-byline): simple line-by-line stream reader
- [nugget](https://github.com/maxogden/nugget): minimalist wget clone written in node. HTTP GETs a file and saves it to the current working directory

## Dev Dependencies

None

## License

MIT
