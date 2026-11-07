class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hashmap = {};
        for(let i =0; i<nums.length; i++){
            if(hashmap[nums[i]]){
                hashmap[nums[i]] +=1
            }else{
                hashmap[nums[i]] = 1
            }    
        }
        let max = 0;
        let res = 0;
        for(let key in hashmap){
            if(max < hashmap[key]){
                max = hashmap[key]
                res = Number(key);
            }
        }
        console.log(hashmap)
        return res
    }
    /*
    input: nums array
    output: return element that appears most

    initialize a freqCounter
    populate freqCounter
    
    

    */
}
