class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {};
        for(let i=0;i<nums.length; i++){
            let difference = target - nums[i]//difference
            if(hashmap[difference] !== undefined){//in hashmap?
                return [i, hashmap[difference]]
            }
            hashmap[nums[i]] = i
        }    
    }
    /*
    initialize an empty hashmap
    iterate through nums
        initialize difference = target - current element
        if difference is in hashmap
            return [current index, stored index from hash]
        store element as key and index as value

two sum, lets do this

    input: array of ints, target int
    output: array of indicies that add up to target

    nums = [3,4,5,6], target = 7
        [0,1]
        3 +4 = 7, inidices of those ints are 0,1

        Input: nums = [4,5,6], target = 10
        Output: [0,2]
        4+6
        Only one valid answer exists. ALWAYS

    hashmap

    psuedocode
    
    thats it because theres only 1 value
    when we find the difference, that means that our
        current element and a value in the hashmap adds up
            to target
                so we take those indicies
    lets code it out now 
    */
}
