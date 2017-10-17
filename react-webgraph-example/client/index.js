import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph.js';

ReactDOM.render(
  <Graph
    width={window.innerWidth}
    height={window.innerHeight}
  />,
  document.getElementById('root')
);