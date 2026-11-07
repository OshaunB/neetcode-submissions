class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let concated = nums.concat(...nums)
        return concated
    }
}
