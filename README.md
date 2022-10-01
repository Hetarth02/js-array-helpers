# js-array-helpers
![npm (scoped)](https://img.shields.io/npm/v/@hetarth02/js-array-helpers?style=for-the-badge)

Array Helper functions for your quick use.

# Installation

```cd
npm i @hetarth02/js-array-helpers
```

# Contributing

- To conttribute please refer [CONTRIBUTING.md](CONTRIBUTING.md).

# How to use

In your `package.json` add the following, `"type": "module"`.

# Example Usage

```js
import { is_array, object_to_array, search_in_array } from "@hetarth02/js-array-helpers";

let arr = [1, 2];
console.log(is_array(arr)); // true

const objectX = {
    0: "Apple",
    1: "Microsoft",
    2: "Google"
}; 
console.log(object_to_array(objectX)); // ['Apple', 'Microsoft', 'Google']

const mang = ['Microsoft', 'apple', 'netflix', 'Google'];
const result = search_in_array("app", mang);
console.log(result); // ['apple']
```
