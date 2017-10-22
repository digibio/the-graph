import React from 'react';
import TheGraph from 'the-graph'

let App = TheGraph.App
let fbpGraph = TheGraph.fbpGraph
let css = TheGraph.css.theGraphLight

const library = {
  basic: {
    name: 'basic component',
    description: 'basic demo component',
    icon: 'eye',
    inports: [
      {'name': 'in0', 'type': 'all'},
      {'name': 'in1', 'type': 'all'},
      {'name': 'in2', 'type': 'all'}
    ],
    outports: [
      {'name': 'out', 'type': 'all'}
    ]
  },
  tall: {
    name: 'tall component',
    description: 'tall demo component',
    icon: 'cog',
    inports: [
      {'name': 'in0', 'type': 'all'},
      {'name': 'in1', 'type': 'all'},
      {'name': 'in2', 'type': 'all'},
      {'name': 'in3', 'type': 'all'},
      {'name': 'in4', 'type': 'all'},
      {'name': 'in5', 'type': 'all'},
      {'name': 'in6', 'type': 'all'},
      {'name': 'in7', 'type': 'all'},
      {'name': 'in8', 'type': 'all'},
      {'name': 'in9', 'type': 'all'},
      {'name': 'in10', 'type': 'all'},
      {'name': 'in11', 'type': 'all'},
      {'name': 'in12', 'type': 'all'}
    ],
    outports: [
      {'name': 'out0', 'type': 'all'}
    ]
  }
};

const randomSelect = array => {
  return array[Math.floor(Math.random() * array.length)]
}

export default class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      graph : new fbpGraph.Graph()
    }
  }
  randomGraph() {
    this.state.graph = new fbpGraph.Graph()
    for(let i = Math.floor(Math.random()*20); i>0; i--) {
      this.addNode()
    }
    this.state.graph.nodes.forEach(node =>  {
      this.addEdge(node)
    })
    this.forceUpdate()
  }
  addNodeClick() {
    this.addNode()
  }
  addNode() {
    let id = Math.floor(Math.random()*10000000000)
    let component = randomSelect(Object.keys(library))
    let metadata = {
      label: component,
      x: Math.random()*this.props.width,
      y: Math.random()*this.props.height
    };
    this.state.graph.addNode(id, component, metadata);
  }
  addEdgeClick() {
    this.addEdge()
  }
  addEdge(startNode, endNode){
    let nodes = this.state.graph.nodes
    if ( nodes.length<1 ) { return; }
    let node1 = startNode || randomSelect(nodes)
    let node2 = endNode || randomSelect(nodes)
    let port1 = randomSelect(library[node1.component].outports)
    let port2 = randomSelect(library[node2.component].inports)
    let meta = { route: Math.floor(Math.random()*10) };
    this.state.graph.addEdge(node1.id, port1.name, node2.id, port2.name, meta);
  }
  getGraph(){
    let graphJSON = JSON.stringify(this.state.graph.toJSON(), null, 2);
    console.log(graphJSON);
  }
  clearGraph(){
    this.state.graph = new fbpGraph.Graph()
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <div className={css.theGraphLight}>
          <App
            readonly = {false}
            height = {this.props.height}
            width = {this.props.width}
            graph = {this.state.graph}
            library = {library}
          />
        </div>
        <div style={{position: 'absolute', top: 0, left: 0}}>
          <button onClick={this.randomGraph.bind(this)}>random graph</button>
          <button onClick={this.addNodeClick.bind(this)} >add node</button>
          <button onClick={this.addEdgeClick.bind(this)}>add edge</button>
          <button onClick={this.getGraph.bind(this)}>get graph</button>
          <button onClick={this.clearGraph.bind(this)}>clear</button>
        </div>
      </div>
    )
  }
}