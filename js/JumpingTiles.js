// There are a number of tiles on the floor, each numbered with a different 
//non-negative integer.Treat this set of tiles as an array. 
// You are initially standing on the first tile. Each tile in the set represents your 
// maximum jumping distance at that position. (For example, if you are standing on 3,
// you can jump up to 3 tiles forward). Find out if you can reach the last tile.

function can_reach_end(nums){
    let n= nums.length -1;
    for(let i = n-1; i >=-1;i--){
if(nums[i] +i >= n) n =i

    }
    return n == 0;
}

console.log(can_reach_end([1, 5, 10, 15]))

// 2nd method 
//you can use a simple greedy algorithm.
// To do this, you can initialize a variable max_reach to 0, which represents the farthest tile you can currently reach. 
// Then, you can iterate through the array of tiles, and for each tile, you can check if it is within your maximum jumping distance from 
// the current position (i.e., if the current index plus the value of the tile is greater than or equal to max_reach). If it is,
//     you can update max_reach to be the current index plus the value of the tile.
// If at any point in the iteration, the current index is greater than max_reach, it means that you cannot reach the current tile from any previous tile, 
//     so you can return False. Otherwise, if you reach the end of the array (i.e., the last index), it means that you can reach the last tile,
//         so you can return True.

function canReachLastTile(tiles) {
  let maxReach = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + tiles[i]);
  }
  return true;
}
