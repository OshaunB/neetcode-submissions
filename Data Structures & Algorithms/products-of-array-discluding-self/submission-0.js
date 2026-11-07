class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = []
        for(let i =0; i< nums.length; i++){
            let product = 1
            let index = 0
            while(index<nums.length){
                if(i !== index){
                    product *= nums[index]
                }
                index++;
            }
            newArr.push(product)
        }
        return newArr
    }
    /*pedac
      initialize new array, return

    iterate through nums,i
    product = 1
    while, index<nums.length
        if index in nums is the same as index in inner loop, continue
            else product *= element in nums
        index++
    index = 0
    new array .push (product)

    return new array
    integer array, nums
    array, return array

    Input: nums = [1,2,4,6]
    Output: [48,24,12,8]

    Input: nums = [-1,0,1,2,3]
    Output: [0,-6,0,0,0]

    hashmap

  

    */
}
