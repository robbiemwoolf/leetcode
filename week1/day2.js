// 1672. Richest Customer Wealth

/*
    You are given an m x n integer grid accounts where acounts[i][j] is the amount of money the ith customer has the jth bank. Return the wealth that the richest customer has.

    A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 function compareNumbers(a, b) {
    return a - b;
  }
  
  let maximumWealth = function(accounts) {
      const sumArray = []
      accounts.forEach((account) => {
          let sum = account[0]
          for (let i = 1; i<account.length; i++) {
              sum = sum + account[i]
          }
          sumArray.push(sum)
          return sumArray
      })
      const sortedArray = sumArray.sort(compareNumbers)
      const largestSum = sortedArray[sortedArray.length-1]
      return largestSum
  }