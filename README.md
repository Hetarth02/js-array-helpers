# js-array-helpers

![npm (scoped)](https://img.shields.io/npm/v/@hetarth02/js-array-helpers?style=for-the-badge)

Array Helper functions for your quick use.

# Installation

```cd
npm i @hetarth02/js-array-helpers
```

# Contributing

-   To conttribute please refer [CONTRIBUTING.md](CONTRIBUTING.md).

# How to use

In your `package.json` add the following, `"type": "module"`.

# Example Usage

```js
import {
	is_array,
	object_to_array,
	search_in_array,
	sanitize_array,
  	get_rms_value,
    random_value,
} from "@hetarth02/js-array-helpers";

let arr = [1, 2];
console.log(is_array(arr)); // true

const objectX = {
	0: "Apple",
	1: "Microsoft",
	2: "Google",
};
console.log(object_to_array(objectX)); // ['Apple', 'Microsoft', 'Google']

const mang = ["Microsoft", "apple", "netflix", "Google"];
const result = search_in_array("app", mang);
console.log(result); // ['apple']

// Santized array Example

// Corrupted Data array with diff data types
const my_array = [
	{ name: "sam", age: null, isEmployed: "false" },
	{ name: "a", age: 456, isEmployed: false },
	{ name: "c", age: undefined, isEmployed: 00 },
	{ name: null, age: 123, isEmployed: true },
	{ name: "asd", age: 123, isEmployed: false },
	{ name: 00, age: 123, isEmployed: null },
	{ name: "sam", age: "123", isEmployed: undefined },
];

// Given schema for correct data types
const my_schema = {
	name: "string",
	age: "number",
	isEmployed: "boolean",
};

// Run sanitize_array with array and schema
console.log(sanitize_array(my_array, my_schema));

// Sanitized Output
// [
//		{ name: 'sam', age: 0, isEmployed: false },
//      { name: 'a', age: 456, isEmployed: false },
//      { name: 'c', age: 0, isEmployed: true },
//      { name: 'null', age: 123, isEmployed: true },
//      { name: 'asd', age: 123, isEmployed: false },
//      { name: '0', age: 123, isEmployed: false },
//      { name: 'sam', age: 123, isEmployed: false }
// ]

// get_rms_value example
const values = [23, 54, 19];
console.log(get_rms_value(values)); // 35.61834733205159

// To reverse an array in parts
let my_array = [1, 2, 3, 4, 5];
let reverseInPart_array = array_reverse_part(my_array, 3, 4);

console.log(reverseInPart_array); // [1, 2, 3, 5, 4]

// To rotate array counter clockwise
let my_array1 = [1, 2, 3, 4, 5];
let rotated_array = array_rotate(my_array1, 3);

console.log(rotated_array); // [4, 5, 1, 2, 3]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(random_value(array)); // ex: 5 (Random value from array)
```
