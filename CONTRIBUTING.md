Whether you are a pro or a someone who is just starting their Open-Source journey, everyone can contribute to make this package better. To make things consistent, please follow the below mentioned points.

# Guidelines

- Please be sure you have your branch in sync with the `main` branch.
- Please follow `snake_case` convention wherever possible.
- Do go through the list of already implemented functions to avoid duplication.
- The PR you make should have the following points
  - New function name
  - Short Description
  - References (documentation, links, etc.)
  - Limitations (If it has any edge cases)
- The function code should also carry appropriate JSDOC comments and a small example displaying both input and output of your function.

# Example PR

```javascript
// index.js
/**
 * Some small description
 * 
 * @param array param
 * @return array
*/
function some_new_function(param) {
    // Your Logic
    return value;
}
```

```javascript
// README.md
import { some_new_function } from @hetarth02/js-array-helpers;

console.log(some_new_function(param)); // Output
```

- some_new_function
- This function does this thing.
- param can only be array