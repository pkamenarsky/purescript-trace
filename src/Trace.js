'use strict';

// module Trace

function f(a) {
  return function g(b, c) {
    console.log("asd", a, b);
  };
}

var _trace = function(f, str, traced_args) {
  var that = this;

  if (typeof(f) === 'function') {
    return function() {
      var r = f.apply(that, arguments);
      return _trace(r, str, traced_args.concat(arguments));
    };
  }
  else {
    console.log(str, traced_args);
    return f;
  }
}

exports.trace = function(str) {
  return function(f) {
    return _trace(f, str, []);
  }
}
