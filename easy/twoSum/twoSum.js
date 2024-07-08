/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up
 * target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * input: nums = [2,7,11,15], target = 9
 * output: [0,1]
 * 
 * Example 2:
 * input: nums = [3,2,4], target = 6
 * output: [1,2]
 * 
 * Example 3:
 * input: nums = [3,3], target = 6
 * output: [0,1]
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // input: array, and an int 
    // output: the indices 

    // we can iterate through the array, 
    // and check whether the difference between the target, and current element exists
    // if so, then we can return the indices

    // // this would be a O(n) runtime 

    // let sumIndex = [];

    // for (let i = 0; i < nums.length; i++) {
    //     let diff = target - nums[i];
    //     if (nums.indexOf(diff) > -1 && nums.indexOf(diff) !== i) {
    //         sumIndex.push(i);
    //         sumIndex.push(nums.indexOf(diff))
    //         return sumIndex;
    //     }
    // }

    // return sumIndex;



    // hashmap solution

    // we create an empty hashmap to store [value: index]

    // we iterate through the array, and populate the hashmap as we go
    // we check target - array[index] exist in hashmap, if not we add to hashmap and continue
    // when we find that the differene is found in the hashmap, we can return the indices

    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in hash) {
            return [i, hash[diff]]
        }

        hash[nums[i]] = i;
    }
};