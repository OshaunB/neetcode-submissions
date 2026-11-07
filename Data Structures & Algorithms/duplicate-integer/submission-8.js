class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set(nums)
        if(mySet.size !== nums.length){
            return true
        }else{
            return false
        }
    }
    /*
    input: array of ints
    output: boolean
        -true if theres a duplicate, false otherwise

    nums 1,2,3,3
    true
    3 appears twice

    1234
    false, each int is unique

    set- compare size to original arr
    hash - populate hash, iterate through hash to check if theres
        a number greater than 1
    array- two loops/pointers, one to keep track of the curr integer another 
        to iterate through the array to find a duplicate

    set is most optimal

    pseudo:
    initialize a new set from nums
    return: compare length of set with length of nums
        - if they are not the same return true
    */
}