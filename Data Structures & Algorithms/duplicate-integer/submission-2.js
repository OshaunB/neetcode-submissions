class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqCounter = {};
        for(let i=0; i<nums.length;i++){
            if(freqCounter[nums[i]] === undefined){
                freqCounter[nums[i]] = true
            }else{
                return true
            }
        }
        return false
    }
}
/*PEDAC


Input: arr of integers
Output: boolean
    return true if duplicate

Input: nums = [1, 2, 3, 3]
Output: true

Input: nums = [1, 2, 3, 4]
Output: false

set or hashmap

initialize our hashmap
iterate for loop
    populate hashmap
    if(current value in hash has been seen)
        return true

return false


*/