Run `npm run build` in `lib1`, then run `npm run build` in `lib2` then you'll get these errors.

```
../lib1/dist/index.d.ts:2:25 - error TS2306: File '/Users/snakamura/typescript_declaration/local_dependency/lib1/node_modules/@types/node/stream.d.ts' is not a module.

2 import stream = require("node/stream");
                          ~~~~~~~~~~~~~

../lib1/node_modules/@types/node/stream.d.ts:3:14 - error TS2300: Duplicate identifier 'Stream'.

3     export = Stream;
               ~~~~~~

  node_modules/@types/node/stream.d.ts:3:14
    3     export = Stream;
                   ~~~~~~
    'Stream' was also declared here.

../lib1/node_modules/@types/node/stream.d.ts:358:14 - error TS2300: Duplicate identifier 'internal'.

358     export = internal;
                 ~~~~~~~~

  node_modules/@types/node/stream.d.ts:358:14
    358     export = internal;
                     ~~~~~~~~
    'internal' was also declared here.

node_modules/@types/node/stream.d.ts:3:14 - error TS2300: Duplicate identifier 'Stream'.

3     export = Stream;
               ~~~~~~

  ../lib1/node_modules/@types/node/stream.d.ts:3:14
    3     export = Stream;
                   ~~~~~~
    'Stream' was also declared here.

node_modules/@types/node/stream.d.ts:358:14 - error TS2300: Duplicate identifier 'internal'.

358     export = internal;
                 ~~~~~~~~

  ../lib1/node_modules/@types/node/stream.d.ts:358:14
    358     export = internal;
                     ~~~~~~~~
    'internal' was also declared here.


Found 5 errors.
```
