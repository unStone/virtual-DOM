var _ = {};

_.type = function (value) {
  return Object.prototype.toString.call(value).replace(/\[object\s|\]/g, '');
}

_.isString = function (value) {
  return _.type(value) === 'String';
}


window._ = _;