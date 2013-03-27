genid
=====

Create pseudo-random string of characters in javascript

This is not a cryptographically sound random string generator or even a good
uuid generator. It is just a quick, dirty way of generating pseudo-random
prefixed strings of a target length.

## Usage

`genid([length = 32], [prefix = ""], [keyspace = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"])`

#### Example:

```javascript
var genid = require("genid");

console.log("ID", genid(16)); // ID: 6GsrEd8efCE6YYGe

console.log("ID", genid(16, "prefix")); // ID: prefixbcCoJ7EtA1MowHP6

console.log("ID", genid(16, "", "0123456789")); // ID: 0985048598175796

```

## Installation

```
npm install genid
```
