class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = []
        for(let i =0; i<nums.length; i++){
        let index = 0;
        let product = 1;
            while(index < nums.length){
                if(i !== index){
                    product*= nums[index]
                }
                index+=1
            }
            newArr.push(product)
        } 
        return newArr
    }
}
