// The deletion distance between two strings is the minimum sum of ASCII values of 
// characters that you need to delete in the two strings in order to have the same 
// string. The deletion distance between cat and at is 99, because you can just delete 
// the first character of cat and the ASCII value of 'c' is 99
//https://www.youtube.com/watch?v=rscLHdeMKXw-- this for how many charter need to delete

//https://www.youtube.com/watch?v=rRPbJL8wsMI-- this is for answer

function deletionDistance(strA,strB){
const n1 = strA.length; //suppose row
const n2 = strB.length;  //suppose column

let dp = Array(n1+1).fill().map(() => Array(n2 + 1).fill(0));// create two Dimensional array fill with 0

// first row - fill the ascii value of strin B
let rsum = 0 // sum of ascii value

// convert into ASCII value
//const result = string.charCodeAt(0);

for(let j =0; j < n2;j++){
rsum += strB.charCodeAt(j);
dp[0][j+1]= rsum;
}

// first column

rsum =0;
for(let i =0; i < n1;i++){
    rsum += strA.charCodeAt(i);
    dp[i+1][0]= rsum;
    }

   //logic

   for(let i =1;i < n1+1;i++){
    for(let j =1;j<n2+1;j++){
        if(strA.charCodeAt(i-1) == strB.charCodeAt(j-1)){
            dp[i][j] = dp[i-1][j-1];
        } else{
            dp[i][j] = Math.min(dp[i-1][j] + strA.charCodeAt(i-1),dp[i][j-1]+strB.charCodeAt(j-1));
        }
    }
   }

return dp[n1][n2];

}

deletionDistance('cat','at');