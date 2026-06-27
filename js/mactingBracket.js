// A string of brackets is correctly matched 
// if you can pair every opening bracket up with 
// a later closing bracket, and vice versa. 
// For example, (()()) is correctly matched, and (() and )( are not.
// Implement a function which takes a string of brackets and returns 
// the minimum number of brackets you'd have to add to the string to make 
// it correctly matched.  For example, (() could be correctly matched by 
// adding a single closing bracket at the end, so you'd return 1. )( can 
// be correctly matched by adding an opening bracket at the start 
// and a closing bracket at the end, so you'd return 2.  
// If your string is already correctly matched, you can just return 0.
//https://www.youtube.com/watch?v=hIZ9RK2izOU&t=230s
// in short calculated the number of brackets needed to balance the string

function bracketMatch(text){
    let oB =0;
    let cB =0;
    for(let i =0; i<text.length;i++){
        if(text[i] === '('){
            oB++;
        } else{
            if(oB >0){
                oB--;
            } else {
                cB++;
            }
        }
    }
    return oB +cB;
}
console.log(bracketMatch("()))("));

///////////////////////////////////////////////////////////////////////////////////////

write the function which return true if brackets was properly matched and false if not.

To handle this, we have to change our approach and use a data structure called a Stack.
    A stack works on a "Last In, First Out" (LIFO) principle.

How the Stack Approach Works:
Iterate through the string character by character.

If you see an opening bracket ((, {, or [), push it onto the top of the stack.

If you see a closing bracket (), }, or ]):

Check the top of the stack.

If the stack is empty, or the bracket at the top doesn't match the closing bracket (e.g., you have a } but the top of the stack is a [), the string is invalid.

If it matches, pop the top bracket off the stack.

At the end, if the stack is completely empty, every bracket was properly matched.

    function isValid(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // 1. If it's an opening bracket, push it to the stack
        if (pairs[char]) {
            stack.push(char);
        } 
        // 2. If it's a closing bracket...
        else {
            // Pop the last opening bracket from the stack
            let lastOpen = stack.pop();
            
            // Check if it's a valid match using our pairs object
            if (pairs[lastOpen] !== char) {
                return false; // Mismatched bracket or empty stack
            }
        }
    }

    // 3. If the stack is empty, everything matched!
    return stack.length === 0;
}

console.log(isValid("{[()]}")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("()[]{}")); // true

