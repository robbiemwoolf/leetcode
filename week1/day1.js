// 1480. Running Sum of 1d Array

/*  
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(num[0]..num[i]).

    Return the running sum of nums.
*/
let nums = [1,3,5,9]
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

// --  -   ---  --   -  --   --   ---  

// 1672. Richest Customer Wealth

/*
    You are given an m x n integer grid accounts where acounts[i][j] is the amount of money the ith customer has the jth bank. Return the wealth that the richest customer has.

    A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/
let accounts = [[1,2,3],[3,2,1]]
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 let maximumWealth = function(accounts) {
    
}