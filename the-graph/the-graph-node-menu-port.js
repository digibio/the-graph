const React = require('react')
const ReactDOM = require('react-dom')
const createClass = require('create-react-class')
const classNames = require('classnames')
module.exports.register = function (context) {

  var TheGraph = context.TheGraph;
  let css = TheGraph.css

  TheGraph.config.nodeMenuPort = {
    container: {},
    backgroundRect: {
      rx: TheGraph.config.nodeRadius,
      ry: TheGraph.config.nodeRadius,
      height: TheGraph.contextPortSize - 1
    },
    circle: {
      r: 10
    },
    text: {}
  };

  TheGraph.factories.nodeMenuPort = {
    createNodeMenuPortGroup: TheGraph.factories.createGroup,
    createNodeMenuBackgroundRect: TheGraph.factories.createRect,
    createNodeMenuPortCircle: TheGraph.factories.createCircle,
    createNodeMenuPortText: TheGraph.factories.createText
  };


  TheGraph.NodeMenuPort = React.createFactory( createClass({
    displayName: "TheGraphNodeMenuPort",
    componentDidMount: function () {
      ReactDOM.findDOMNode(this).addEventListener("tap", this.edgeStart);
    },
    edgeStart: function (event) {
      // Don't tap graph
      event.stopPropagation();

      var port = {
        process: this.props.processKey,
        port: this.props.label,
        type: this.props.port.type
      };

      var edgeStartEvent = new CustomEvent('the-graph-edge-start', { 
        detail: {
          isIn: this.props.isIn,
          port: port,
          route: this.props.route
        },
        bubbles: true
      });
      ReactDOM.findDOMNode(this).dispatchEvent(edgeStartEvent);
    },
    render: function() {
      var labelLen = this.props.label.length;
      var bgWidth = (labelLen>12 ? labelLen*8+40 : 120);
      // Highlight compatible port
      var highlightPort = this.props.highlightPort;
      var highlight = (highlightPort && highlightPort.isIn === this.props.isIn && highlightPort.type === this.props.port.type);

      var rectOptions = {
        className: classNames(css.contextPortBackground, (highlight ? css.highlight : "")),
        x: this.props.x + (this.props.isIn ? -bgWidth : 0),
        y: this.props.y - TheGraph.contextPortSize/2,
        width: bgWidth
      };

      rectOptions = TheGraph.merge(TheGraph.config.nodeMenuPort.backgroundRect, rectOptions);
      var rect = TheGraph.factories.nodeMenuPort.createNodeMenuBackgroundRect.call(this, rectOptions);

      var circleOptions = {
        className: classNames(css.contextPortHole, css.stroke, css["route"+this.props.route]),
        cx: this.props.x,
        cy: this.props.y,
      };
      circleOptions = TheGraph.merge(TheGraph.config.nodeMenuPort.circle, circleOptions);
      var circle = TheGraph.factories.nodeMenuPort.createNodeMenuPortCircle.call(this, circleOptions);

      var textOptions = {
        className: classNames(css.contextPortLabel, css.fill, css["route"+this.props.route]),
        x: this.props.x + (this.props.isIn ? -20 : 20),
        y: this.props.y,
        children: this.props.label.replace(/(.*)\/(.*)(_.*)\.(.*)/, '$2.$4')
      };

      textOptions = TheGraph.merge(TheGraph.config.nodeMenuPort.text, textOptions);
      var text = TheGraph.factories.nodeMenuPort.createNodeMenuPortText.call(this, textOptions);

      var containerContents = [rect, circle, text];

      var containerOptions = TheGraph.merge(
        TheGraph.config.nodeMenuPort.container,
        { className: classNames(css.contextPort, css.click, css[this.props.isIn ? "contextPortIn" : "contextPortOut"]) });
      return TheGraph.factories.nodeMenuPort.createNodeMenuPortGroup.call(this, containerOptions, containerContents);

    }
  }));


};
