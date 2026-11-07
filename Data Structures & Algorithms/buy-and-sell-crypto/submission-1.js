class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highestProfit = 0,left=0;
        for(let right=left+1; right<prices.length;right++){
            if(prices[right]<prices[left]){
                left=right
            }else{
                highestProfit = Math.max(prices[right]-prices[left], highestProfit)
            }
        }
        return highestProfit
    }
}
/*

*/
