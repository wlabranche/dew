dew [![NPM](https://nodei.co/npm/dew.png?mini=true)](https://nodei.co/npm/dew/) [![Build Status](http://img.shields.io/travis-ci/wlabranche/dew.svg?branch=master&style=flat)](https://travis-ci.org/wlabranche/dew)
====

```
npm install dew -g
```
`dew` creates a file, tests for that file, and add it to other files dependencies (when specified, not yet impletemented).

As of now, this only works on javascript and coffeescript files, it defaults to javascript.
To use make and remove coffeescript files use the full path name.


`dew <filename>` will generate a file and a test file for you, basically it's an optimized touch.

You can also use to `dew` on a directory and to build tests/main files for everything inside (including other directories).
This has the benefit of allow for both tdd and bdd, so write your tests and `dew` the file and it will build the necessary files for you.

`undew <filename>` will remove the file and any tests associated with it.

`detest <filename>` removes test file for specified file, currently assumes '-test'.
