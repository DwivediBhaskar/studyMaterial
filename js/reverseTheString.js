// Reverse the string or word

const str="abcd";

function foo(str){
    if(str.length <2){
        return str;
    }
    
    return foo(str.slice(1)) + str[0];
}
const result = foo(str);
console.log(result);

2nd method //////////////////////////////////////

function myFunction(str){
let reverse ="";

for(let i = 0; i < str.length;i++){
   reverse = str[i]+reverse;
}
return reverse;
}

console.log(myFunction("abc")

/////////////////////////////////////////////////////////////////////
 Reverse number

function myFunction(num){
   const reverse = num.toString().split("").reverse().join("");
   return parseInt(reverse) * Math.sign(num);

}

console.log(myFunction(-192))
            
