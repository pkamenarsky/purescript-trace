## Module Trace

#### `traceColored`

``` purescript
traceColored :: forall f. String -> String -> f -> f
```

Prints the arguments of `f`, when fully evaluated, to the console.
For example:

    let f = traceColored orange "f" \x y -> x + y
        g = f 5
        r = g 6

will print `f :: 5 -> 6 -> 11` (in orange). The arguments will be in
an expandable group, allowing further inspection.

#### `orange`

``` purescript
orange :: String
```

#### `blue`

``` purescript
blue :: String
```

#### `green`

``` purescript
green :: String
```

#### `red`

``` purescript
red :: String
```

#### `trace`

``` purescript
trace :: forall f. String -> f -> f
```

Uncolored version of `traceColored`.


