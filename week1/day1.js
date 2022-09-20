// 1480. Running Sum of 1d Array

/*  
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(num[0]..num[i]).

    Return the running sum of nums.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const runningSum = function(nums) {
    let sum = nums[0]
    const array = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        sum = sum + nums[i]
        array.push(sum)
    }
    return array
}