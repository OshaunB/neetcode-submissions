class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k =0;
        for(let i =0; i<nums.length; i++){
            if(nums[i] !== val){
                nums[k] = nums[i]
                k+=1
            }
        }
        return k
    }
    /*

    initialize k =0, keep track of values that arent val
    iterate through integer array
        check if current element != val
            nums[k] = nums[i]
            k+=1 //increment k cause a value isnt val

            return k


    input: integer array, integer val
    output: the amt of nums that is not val

    Input: nums = [1,1,2,3,4]
    val = 1

    Output: [2,3,4]
    You should return k = 3 as
    we have 3 elements which are not equal to val = 1.

    k=3

    arrays

    algo:

    initialize k =0, keep track of values that arent val
    iterate through integer array
        check if current element != val
            nums[k] = nums[i]
            k+=1 //increment k cause a value isnt val

            return k





    */
}
