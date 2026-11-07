class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {};
        for(let i =0; i<nums.length; i++){
            let difference = target - nums[i]
            if(hashmap[difference] !== undefined){
                return [i, hashmap[difference]]
            }

            hashmap[nums[i]] = i
        }
    }
    /*
    initialize hashmap
    iterate through nums array
        initialize difference = target - nums[i]
        if difference exists
            return [i, hashmap[difference]]

        hashma[nums[i]] = i


    input: array of nums, integer
    output: array of indicies

    Input: nums = [3,4,5,6], target = 7
    Output: [0,1]

    Input: nums = [4,5,6], target = 10
    Output: [0,2]

    Input: nums = [5,5], target = 10
    Output: [0,1]

    hashmap

    


    */
}
