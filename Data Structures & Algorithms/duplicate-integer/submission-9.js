class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {};
        for(let i =0; i<nums.length; i++){
            let curr = nums[i]
            if(seen[curr] === undefined){
                seen[curr] = true
            }else{
                return true
            }
        } 
        return false
    }
    /* 
    initialize empty hashmap
    iterate through nums arr
        if undefined then initialzie key value pair
        else return true
    //loop ends
    return false
    given an int arr, 
    return true if any value appears more than once
    return false other

    Input: nums = [1, 2, 3, 3]
    Output: true

    Input: nums = [1, 2, 3, 4]
    Output: false

    hashmap

   
    */
}