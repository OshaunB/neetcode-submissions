class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length
    }
    /*let hashmap = {};
        for(let i =0; i<nums.length; i++){
            if(hashmap[nums[i]]){
                return true
            }
            hashmap[nums[i]] = true
        }
        return false

     initialize empty hashmap

    iterate through nums
        check if current element is in hashmap
            valid: return true


    return false

    i: array of ints
    o: boolean

    return true if any value appears twice

    hashmap

    if a value exists in the hashmap already return true

    false at the end

   
    
    */
}