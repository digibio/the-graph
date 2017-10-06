The Graph Editor [![Build Status](https://secure.travis-ci.org/flowhub/the-graph.png?branch=master)](http://travis-ci.org/flowhub/the-graph) [![MIT license](http://img.shields.io/badge/License-MIT-brightgreen.svg)](#license)
================

This project provides a set [React](https://facebook.github.io/react) components for viewing and editing node-based graphs.
The focus is on graphs used for dataflow and [Flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming).

The graph structure is stored by [fbp-graph](https://github.com/flowbased/fbp-graph), which supports extendable metadata and undo/redo.

You can optionally use [klayjs-noflo](https://github.com/noflo/klayjs-noflo) for automatic layout of graphs.

`the-graph` is used as the editor in the [Flowhub IDE](https://flowhub.io).

# Fork information

When I tried to inject this into my own React project as a regular component, this failed - of course no surprise, reading further a bit. So this started as a hack to be able to use it anyway.

So far, so good.

I intend to make it either into a standalone or PR into the original, but it requires a bit of work clearly, to be practically bump up from React 0.x to 15.x, and even more to work with React 16.

## Examples

* Basic demo. [code](./examples/demo-simple.html) |
[Run](https://flowhub.github.io/the-graph/examples/demo-simple.html)
* Stresstest. [code](./examples/demo-full.html) |
[Run](https://flowhub.github.io/the-graph/examples/demo-full.html)
* Thumbnail. [code](./examples/demo-thumbnail.html) |
[Run](https://flowhub.github.io/the-graph/examples/demo-thumbnail.html)

## Using

Install via NPM

    npm install the-graph

See the examples for how to include the `.js` and `.css` files, and API usage.

## License

[The MIT License](./LICENSE-MIT.txt)

## Developing

Clone the repo

    git clone https://github.com/flowhub/the-graph.git # or your own fork on Github
    cd the-graph

Build and watch for changes

    grunt dev

Open [http://localhost:3000/spec/runner.html](http://localhost:3000/spec/runner.html) for the automated tests,
or [http://localhost:3000/examples/demo-full.html](http://localhost:3000/examples/demo-full.html) for interactive demo.

Send pull requests on Github!
