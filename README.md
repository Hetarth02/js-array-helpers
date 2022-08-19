# js-array-helpers
![npm (scoped)](https://img.shields.io/npm/v/@hetarth02/js-array-helpers?style=for-the-badge)

Array Helper functions for your quick use.

# Installation

```cd
npm i @hetarth02/js-array-helpers
```

# How to use

In your `package.json` add the following, `"type": "module"`.

```js
import { is_array, object_to_array,search_in_array } from "@hetarth02/js-array-helpers";

let arr = [1, 2];
console.log(is_array(arr)); // true

 const objectX = {
     0:"Apple",
     1:"Microsoft",
     2:"Google"
 }
 
 console.log(object_to_array(objectX)) // [ 'Apple', 'Microsoft', 'Google' ]
 
 
const fruits = [ 'apple','mango','banana']

function search_in_array(query,array) {
    return array.filter(item => item.search(query) !== -1)
}

console.log( search_in_array( "app" , fruits ) );

```
