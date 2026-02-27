const varUsage = `/* ---- Usage for "var" ---- */
// can be reassigned and redeclared in the same block.
var fruit = "apple";
console.log(fruit);

fruit = "orange";
console.log(fruit);

var fruit = "banana";
console.log(fruit);

// val leaks outside of function.
if(true) {
    var spice = "pepper";
}
console.log(spice);`
const varBlock = document.querySelector("#var-code-block");
varBlock.textContent = varUsage;

const letUsage = `/* ---- Usage for "let" ---- */

// Can be reassigned but cannot be redeclared.
let vegetable = "broccoli";
console.log(vegetable);

vegetable = "spinach";
console.log(vegetable);

// Redecleration will not work
// let vegetable = "Cabbage";

// block and nested redecleration works as well.
{
    let vegetable = "cucumber";
    console.log(vegetable);
    {
        let vegetable = "squash";
        console.log(vegetable);
    }
}`
const letBlock = document.querySelector("#let-code-block");
letBlock.textContent = letUsage;

const constUsage =`/* ---- Usage for "const" ---- */

// Must be initialized.
// cost shape;

const shape = "circle";
console.log(shape);
// Can't be reassigned
// shape = "triangle";

// Can't be redeclared.
// const shapes = "star";

// can be redeclared in nested blocks.
{   
    // cannot be called here.
    // console.log(shape);
    const shape = "star";
    console.log(shape);
    {
        const shape = "rectangle";
        console.log(shape);
    }
}`;
const constBlock = document.querySelector("#const-code-block");
constBlock.textContent = constUsage;