class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxSum = 0, left = 0;
        for(let right=0; right<prices.length; right++){
            while(prices[right]<prices[left]){
                left++;
            }
            maxSum = Math.max(maxSum, prices[right] - prices[left])
        }
        return maxSum
    }
    /* initialize maxProfit, 0
    initialize left, 0

    iterate through prices,right=0, right<prices.length, right++
    
        while val at right < val at left 
            left ++
    
    maxSum = Math.max(maxSum, val right- val left)

    return maxSum

    given an integer array, prices
    return int, maximum profit

    Input: prices = [10,1,5,6,7,1]
    Output: 6

    Input: prices = [10,8,7,5,2]
    Output: 0

    sliding window
    why? we have keep track of lowest and highest and calculate a
    value each time

    10,3,3,3,2,3,3,3,4,2,1,5,6,7,1

   




    */
}
