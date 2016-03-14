'use strict';

// module Trace

var _zip_const = function(a, x) {
  var b = [];

  for (var i = 0; i < a.length; i++) {
    b.push(a[i]);
    b.push(x);
  }

  return b;
}

var _trace = function(f, str, traced_args) {
  if (typeof(f) === 'function') {
    return function() {
      var r = f.apply(this, arguments);
      return _trace(r, str, traced_args.concat(Array.prototype.slice.call(arguments)));
    };
  }
  else {
    console.log.apply(this,
      [ str, "::" ].concat(_zip_const(traced_args, "->")).concat([f]));
    return f;
  }
}

exports.trace = function(str) {
  return function(f) {
    return _trace(f, str, []);
  }
}
