// Closure

/**
 * Definition
 * In JavaScript, when we return a function from another function,
 * we are effectively returning a combination of the function definition
 * along with the function's scope. This would let the function definition
 * have an associated persistent memory which could hold on to live data 
 * between executions.
 * That combination of the function and its scope chain is what 
 * is called a closure in JavaScript.
 *  */ 
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;//here the javascript will return the inner function with its scope
}
const fn = outer();
fn();
fn();