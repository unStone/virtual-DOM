
function Element(tagName, attribute, children) {
  this.tagName = tagName;
  this.attribute = attribute;
  this.children = children || [];
}

Element.prototype.render = function() {
  var el = document.createElement(this.tagName);
  var attributes = this.attributes;

  for(var attributeName in attributes) {
    var attributeValue = attributes[attributeName];
    el.setAttribute(attributeName, attributeValue);
  }

  this.children.forEach(function(child) {
    var childEl = child instanceof Element
      ? child.render()
      : document.createTextNode(child);
    el.appendChild(childEl);
  })
  return el
}

window.el = function (tagName, attribute, children) {
  return new Element(tagName, attribute, children);
}