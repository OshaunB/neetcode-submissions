class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = [];
        for(let i =0; i<nums.length;i++){
            let product = 1;
            let index = 0;
            while(index<nums.length){
                if(i !== index){
                    product *= nums[index]
                }
                index+= 1
            }
            newArr.push(product)
        }
        return newArr
    }
    /*
       algorithm
    let newArr = []
    iterate through nums, i= 0
      initialize product = 1;
      initialize index = 0
        while(index< nums.length){
            if(i !== index){
                product *= nums[index]
            }
            index+=1
        }
    newArr.push(product)

return newArr
    input: array of integers, nums
    output: array of integers, product of nums

    Input: nums = [1,2,4,6]
    Output: [48,24,12,8]

    2*4*6 = 48
    1*4*6= 24
    1 2 6 = 12
    1 2 4 = 8

    Input: nums = [-1,0,1,2,3]
    Output: [0,-6,0,0,0]

    arrays

    algorithm
    let newArr = []
    iterate through nums, i= 0
      initialize product = 1;
      initialize index = 0
        while(index< nums.length){
            if(i !== index){
                product *= nums[index]
            }
            index+=1
        }
    newArr.push(product)

return newArr

Input: nums = [1,2,4,6]
Output: [48,24,12,8]
    */
}
