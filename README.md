dew [![NPM](https://nodei.co/npm/dew.png?mini=true)](https://nodei.co/npm/dew/) [![Build Status](http://img.shields.io/travis-ci/wlabranche/dew.svg?branch=master&style=flat)](https://travis-ci.org/wlabranche/dew)
====

```
npm install dew -g
```
`dew` creates a file, tests for that file, and add it to other files dependencies (when specified, not yet impletemented).

This is super alpha, I hope to get it doing more soon.

As of now, this only works on javascript and coffeescript files, it defaults to javascript.
To use make and remove coffeescript files use the full path name.


`dew <filename>` will generate a file and a test file for you, basically it's an optimized touch.

`undew <filename>` will remove the file and any tests associated with it.

`detest <filename>` removes test file for specified file, currently assumes '-test'.
