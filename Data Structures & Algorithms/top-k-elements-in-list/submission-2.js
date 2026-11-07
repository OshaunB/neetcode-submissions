class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let freqCounter ={};
      let returnArr = [];
      for(let i =0;i<nums.length;i++){
        if(freqCounter[nums[i]]){
            freqCounter[nums[i]] += 1
        }else{
            freqCounter[nums[i]] = 1
        }
      }

      let buckets = Array(nums.length+1).fill().map(x => [])
      for(let keys in freqCounter){
        buckets[freqCounter[keys]].push(Number(keys))
      }

      for(let i = buckets.length-1; i>=0; i--){
        for(let j = 0; j<buckets[i].length; j++){
            returnArr.push(buckets[i][j])
            if(returnArr.length === k){
                return returnArr
            }
        }
      }
    }
}