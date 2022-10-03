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
import { is_array, object_to_array, search_in_array,sanitize_array } from "@hetarth02/js-array-helpers";

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






// Santized array Example

// Corrupted Data array with diff data types
const my_array = [
    {name:'sam',    age:null,       isEmployed:'false'},    
    {name:'a',      age:456,        isEmployed:false},    
    {name:'c',      age:undefined,  isEmployed:00}    ,
    {name:null,     age:123,        isEmployed:true}    ,
    {name:'asd',    age:123,        isEmployed:false}   , 
    {name:00,       age:123,        isEmployed:null}    ,
    {name:'sam',    age:'123',      isEmployed:undefined}    
]



// Given schema for correct data types
const my_schema = {
    "name":'string',
    "age":'number',
    "isEmployed":'boolean'
}

// Run sanitize_array with array and schema
console.log(sanitize_array(my_array,my_schema))

// Sanitized Output 
// [    { name: 'sam', age: 0, isEmployed: false },
//      { name: 'a', age: 456, isEmployed: false },
//      { name: 'c', age: 0, isEmployed: true },
//      { name: 'null', age: 123, isEmployed: true },
//      { name: 'asd', age: 123, isEmployed: false },
//      { name: '0', age: 123, isEmployed: false },
//      { name: 'sam', age: 123, isEmployed: false } 
//  ]


// find_and_update array Example

const arr = [
    {name:'suyash',id:123,job:'dev'},
    {name:'ajay',id:1,job:'none'},
    {name:'ajay',id:2,job:'mover'},
    {name:'ajay',id:3,job:'a'},
    {name:'ajay',id:4,job:'v'},
    {name:'ajay',id:5,job:'b'},
]

const result = find_and_update(arr,"name","ajay","aman")

console.log(result)

// Output
// [    { name: 'suyash', id: 123, job: 'dev' },
//      { name: 'aman', id: 1, job: 'none' },
//      { name: 'aman', id: 2, job: 'mover' },
//      { name: 'aman', id: 3, job: 'a' },
//      { name: 'aman', id: 4, job: 'v' },
//      { name: 'aman', id: 5, job: 'b' } 
//  ]




// find_key_and_update array Example

const arr = [
    {name:'suyash',id:123,job:'dev'},
    {name:'ajay',id:1,job:'none'},
    {name:'ajay',id:2,job:'mover'},
    {name:'ajay',id:3,job:'a'},
    {name:'ajay',id:4,job:'v'},
    {name:'ajay',id:5,job:'b'},
]

const result = find_key_and_update(arr,"name","ajay","job",'none',"some")
const star_result = find_key_and_update(arr,"name","ajay","job",'*',"some")

console.log(result)

// Output 
[ { name: 'suyash', id: 123, job: 'dev' },
  { name: 'ajay', id: 1, job: 'some' },
  { name: 'ajay', id: 2, job: 'mover' },
  { name: 'ajay', id: 3, job: 'a' },
  { name: 'ajay', id: 4, job: 'v' },
  { name: 'ajay', id: 5, job: 'b' } 
]


console.log(star_result)

// Output
[ { name: 'suyash', id: 123, job: 'dev' },
  { name: 'ajay', id: 1, job: 'some' },
  { name: 'ajay', id: 2, job: 'some' },
  { name: 'ajay', id: 3, job: 'some' },
  { name: 'ajay', id: 4, job: 'some' },
  { name: 'ajay', id: 5, job: 'some' } ]








```
