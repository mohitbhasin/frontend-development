import {
    PI, add
} from './sample-module.js';

console.log(PI);
console.log(add(4,9));

// Default export can have any name.
// Only one default export per file
import course from './sample-module.js';
console.log(course);