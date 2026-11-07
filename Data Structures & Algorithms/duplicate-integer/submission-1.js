class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqCount = {};

        for(let i =0; i <nums.length; i++){
            if(freqCount[nums[i]] === undefined){
                freqCount[nums[i]] = 1
            }else if(freqCount[nums[i]] === 1){
                return true
            }
        }
        return false
    }
}

/*PEDAC

array integer

boolean true, if contains duplicate
    false otherwise

Input: nums = [1, 2, 3, 3]
Output: true

Input: nums = [1, 2, 3, 4]
Output: false

hashmap

initialize a hashmap, keep track if whether or not a value has been seen
iterate through nums
    populate frequency counter
        if value of key is greater that one or is true
            return true

return false

*/