class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indexObj = {};
        for(let i =0; i<nums.length; i++){

            let difference = target - nums[i]
            if(indexObj[difference] !== undefined){ 
                return [i, indexObj[difference]] 
            }else{
                 indexObj[nums[i]] = i 
            }
        }
    }
    /*
    arr of ints, target
    indices that add up to target

    Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]


Input: nums = [4,5,6], target = 10

Output: [0,2]

hashmap to store indicies
iterate through nums 
    check if hash has target - current element 
        if invalid 
            hash[nums[i]] = i 
        if valid
            [i, hash[target - current element]]
        

    */
}
