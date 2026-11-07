class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {};
        for(let i=0; i <nums.length; i++){
            let difference = target - nums[i]
            if(hashmap[difference] !== undefined){
                return [hashmap[difference], i]
            }
            hashmap[nums[i]] = i
        }
    }
    /*
    initialize a empty hashmap
    iterate through nums
        let difference = target - curr num
        check if difference is in hashmap
            [hashmap[difference], i]
        hashmap[nums[i]] = i
    given an array of integers and an int target
    return indicies that add up to target

    every input has exactly one pair of indicies

    return the smaller index first

    nums = [3,4,5,6], target = 7
    Output: [0,1]
    3+4
    
    Input: nums = [4,5,6], target = 10
    Output: [0,2]
    6+4

    hashmap and math

    
    */
}
