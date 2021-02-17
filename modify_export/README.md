Run `npm run build` and you'll see only `Z` is exported in dist/test1.d.ts.

```
export class Z extends X {
}
declare class X {
}
export {};
```

This won't happen when you modify module.exports directly.

```
module.exports = { X, Y };
module.exports.Z = Z;
```
