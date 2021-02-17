Run `npm run build` and you'll see this error.

```
src/test2.js:6:7 - error TS9006: Declaration emit for this file requires using private name 'Y' from module '"/Users/snakamura/typescript_declaration/indirect_export/src/test1"'. An explicit type annotation may unblock declaration emit.

6 class P {
        ~


Found 1 error.
```

This won't happen when you export `X` and `Y` directly from test1.js like this.

```
module.exports = { X, Y };
```
