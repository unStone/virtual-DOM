var _ = {};

_.type = function (value) {
  return Object.prototype.toString.call(value).replace(/\[object\s|\]/g, '')
}


window._ = _;