const React = require('react')
const ReactDOM = require('react-dom')
const createClass = require('create-react-class')
const classNames = require('classnames')
const defaultFactories = require('./factories.js');
const merge = require('./merge.js');

module.exports = theGraph => {
  let css = theGraph.css
  var config = {
    container: {},
    rect: {
      className: css.tooltipBackground,
      x: 0,
      y: -7,
      rx: 3,
      ry: 3,
      height: 16
    },
    text: {
      className: css.tooltipLabel,
      ref: "label"
    }
  };


  var factories = {
    createTooltipGroup: defaultFactories.createGroup,
    createTooltipRect: defaultFactories.createRect,
    createTooltipText: defaultFactories.createText
  };

// Port view
  let Tooltip = React.createFactory( createClass({
    displayName: "TheGraphTooltip",
    render: function() {

      var rectOptions = merge(config.rect, {width: this.props.label.length * 6});
      var rect = factories.createTooltipRect.call(this, rectOptions);

      var textOptions = merge(config.text, { children: this.props.label });
      var text = factories.createTooltipText.call(this, textOptions);

      var containerContents = [rect, text];

      var containerOptions = {
        className: classNames(css.tooltip, (this.props.visible ? "" : css.hidden)),
        transform: "translate("+this.props.x+","+this.props.y+")",
      };
      containerOptions = merge(config.container, containerOptions);
      return factories.createTooltipGroup.call(this, containerOptions, containerContents);

    }
  }));

  return {
    config: config,
    factories: factories,
    Tooltip: Tooltip,
  }
};
