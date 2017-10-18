# Fork information

This is a massive refactor of the-graph. So massive that I decided to rename it to "react-webgraph" (the 'the' in 'the-graph' bugs me a little). I will see in time if I can make it a PR.

The-Graph is a pretty library to manipulate svg graphs. However, when I tried to inject this into my own WebPack-driven React project as a regular component, this failed. It was not designed for that and ships with it's own (very old) version of react.

So this started as a hack to be able to use it anyway as a component in a React environment.

So far so good; there is a working implementation of the basic demo as a webpack project in **react-webgraph-example**.

Tests will definitely not work anymore, I completely ignored those for now. I just needed something fast.
It can not be used in React 16.x because there are breaking deprecations that I did not refactor yet. 

Working on getting the styles/classNames right now, most of it is workable atm using modular class injection.

A lot will still have to be done for this to be completely up-to-date. Over time I will most likely refactor or rewrite lots of the code, and give it my own twist; easier to configure, override styles, etc.

below the original Readme.md

The Graph Editor [![Build Status](https://secure.travis-ci.org/flowhub/the-graph.png?branch=master)](http://travis-ci.org/flowhub/the-graph) [![MIT license](http://img.shields.io/badge/License-MIT-brightgreen.svg)](#license)
================

This project provides a set [React](https://facebook.github.io/react) components for viewing and editing node-based graphs.
The focus is on graphs used for dataflow and [Flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming).

The graph structure is stored by [fbp-graph](https://github.com/flowbased/fbp-graph), which supports extendable metadata and undo/redo.

You can optionally use [klayjs-noflo](https://github.com/noflo/klayjs-noflo) for automatic layout of graphs.

`the-graph` is used as the editor in the [Flowhub IDE](https://flowhub.io).

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
