

// //Take a substitute array of size N+1 and initalize it with 0.
// Traverse the given array and increase the value of substitute[arr[i]] by one .
// Then again traverse the substitute array starting from index 1 to N.
// Since the numbers are from 1 to N in the array arr[]

// Take a substitute array of size N+1 and initalize it with 0.
// Traverse the given array and increase the value of substitute[arr[i]] by one .
// Then again traverse the substitute array starting from index 1 to N.
// If you find any index value greater than 1 that is repeating element A.

// If you find any index value = 0 then that is the missing element B.

// Dry Run: lets take the example of array[] = {3,1,2,5,3}

// The size of the array is 5

// We initialize a substitute array of size 6 with elements 0.

// Now traversing through the array 

// Found 3 at 0 indexes, increase the value of substitute array at index 3 by 1.
// Found 1 at 1 index, increase the value of substitute array at index 1 by 1.
// Found 2 at 2 indexes, increase the value of substitute array at index 2 by 1.
// Found 5 at 3 indexes, increase the value of substitute array at index 5 by 1.
// Found 3 at 4 indexes, increase the value of substitute array at index 3 by 1.

function missing(arr) {
    const counts = {};
    const result = { missing: [], duplicates: [] };
    const n = arr.length;

    // Step 1: Count frequencies in a single pass
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Step 2: Check for missing and duplicates from 1 to n
    for (let i = 1; i <= n; i++) {
        const count = counts[i] || 0;
        if (count === 0) {
            result.missing.push(i);
        } else if (count > 1) {
            result.duplicates.push(i);
        }
    }

    return result;
}

console.log(missing([1, 4, 3, 5, 3]));
// Output: { missing: [ 2 ], duplicates: [ 3 ] }
