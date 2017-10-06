The Graph Editor [![Build Status](https://secure.travis-ci.org/flowhub/the-graph.png?branch=master)](http://travis-ci.org/flowhub/the-graph) [![MIT license](http://img.shields.io/badge/License-MIT-brightgreen.svg)](#license)
================

This project provides a set [React](https://facebook.github.io/react) components for viewing and editing node-based graphs.
The focus is on graphs used for dataflow and [Flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming).

The graph structure is stored by [fbp-graph](https://github.com/flowbased/fbp-graph), which supports extendable metadata and undo/redo.

You can optionally use [klayjs-noflo](https://github.com/noflo/klayjs-noflo) for automatic layout of graphs.

`the-graph` is used as the editor in the [Flowhub IDE](https://flowhub.io).

# Fork information

When I tried to inject this into my own WebPack-driven React project as
a regular component, this failed - of course no surprise,
reading further a bit.
So this started as a hack to be able to use it anyway.

So far, so good. Code does not crash, and the component
can be imported, like so:

```
import {App, fbpGraph} from 'the-graph'

class GraphComponent extends React.Component {
  render(){
    let graph = new fbpGraph()
    graph.addNode(1, 'hi', {label: 'basic node', x: 50, y: 0})

    return <App
        graph={graph}
        library={props.library}
    />
}
```
something like this. Work in progress...

Working on getting the styles/classNames right now, which seem to get lost.

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
