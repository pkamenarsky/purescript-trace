function f(a) {
  return function g(b, c) {
    console.log("asd", a, b);
  };
}

var trace = function(f, traced_args) {
  var that = this;

  if (typeof(f) === 'function') {
    return function() {
      r = f.apply(that, arguments);
      return trace(r, traced_args.concat(arguments));
    };
  }
  else {
    console.log(traced_args);
    return f;
  }
}

trace(f, [])(5)(6, 7);
