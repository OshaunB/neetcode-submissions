class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     let freqCounter = {};
     let returnArr = [];
     for(let i = 0; i <nums.length; i++){
        if(freqCounter[nums[i]] === undefined){
            freqCounter[nums[i]] = 1
        }else{
            freqCounter[nums[i]] += 1
        }
     }

     let buckets = Array(nums.length+1).fill().map(() => [])

     
     for(let key in freqCounter){
        //key is the element, value is the index
        buckets[freqCounter[key]].push(Number(key))
     }
     
     for(let i = buckets.length-1; i >= 0; i--){
        for(let j=0; j< buckets[i].length; j++){
            returnArr.push(buckets[i][j])
            if(returnArr.length === k){
                return returnArr
            }
        }
     }
    }
    /*
    input: array of nums, integer k
    output: array of nums

    Input: nums = [1,2,2,3,3,3], k = 2
    Output: [2,3]

    initialize freqCounter
    iterate through nums
        populate freqCount

    initialize buckets
        starting at index 0
    
    
    */
}
