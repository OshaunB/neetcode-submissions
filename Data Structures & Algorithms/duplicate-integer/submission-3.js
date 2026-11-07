class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqCounter = {};
        for(let i = 0; i<nums.length; i++){
            if(freqCounter[nums[i]] === undefined){
                freqCounter[nums[i]] = true
            }else{
                return true
            }
        }
        return false
    }
    /*
    input: array of ints
    output: boolean
        - true if there is a duplicate
        - false otherwise

    Input: nums = [1, 2, 3, 3]
    Output: true
    3 appears twice, return true

    Input: nums = [1, 2, 3, 4]
    Output: false
    every number is unique, return false

    Input: nums = []
    Output: false

    hashmap -> freqCounter, set and compare sizes

    initialize freqCounter
    iterate through nums
        populate freqCounter
            if current element is undefined 
                give it a value
            else
            return true

        return false

    */
}
