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
            return [hashmap[difference], i]
        }
        hashmap[nums[i]] = i
      } 
    }
    /*
    
    initialize an empty hashmap
    iterate through nums
        initialize difference -> target - current element
        is the difference in hashmap?
            valid return [hashmap[difference], i]
                - hash contains stored index of 
                    every seen element

        store index of current element in hash


    i: array of ints, int target
    o: array of the 2 indicies that add up to target
        smaller index first

    Input: nums = [3,4,5,6], target = 7
    Output: [0,1]
    3+4

    Input: nums = [4,5,6], target = 10
    Output: [0,2]
    4+6

    



   
    */
}
