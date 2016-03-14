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

var _get_name = function(o) {
  if (o.constructor.name)
    return o.constructor.name;
  else
    return o.toString();
}

var _trace = function(f, color, str, traced_args) {
  if (typeof(f) === 'function') {
    return function() {
      var r = f.apply(this, arguments);
      return _trace(r, color, str, traced_args.concat(Array.prototype.slice.call(arguments)));
    };
  }
  else {
    console.groupCollapsed.call(console, "%c %s :: %s ➜ %s", 'color: '  + color, str, traced_args.map(_get_name).join(" ➜ "), f);

    for (var i = 0; i < traced_args.length; i++)
      console.log(traced_args[i]);
    console.log(f);

    console.groupEnd();

    return f;
  }
}

exports.traceColored = function(color) {
  return function(str) {
    return function(f) {
      return _trace(f, color, str, []);
    };
  };
}
