window.react = require("react");
window.reactDom = require("react-dom");
const React = require("react");

exports.wrapPageElement = ({ element, props }) => {
  return React.cloneElement(element, {
    ...props,
    ...element.props,
    // https://github.com/react-component/footer#api
    footerProps: {
      bottom: `Scaleph`
    },
    showCopyRight: false
  });
};
