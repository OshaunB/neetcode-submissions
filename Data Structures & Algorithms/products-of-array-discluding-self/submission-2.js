class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = [];
        let index = 0;
        for(let i =0; i< nums.length; i++){
            let product = 1;
            while(index < nums.length){
                if(i !== index){
                    product *= nums[index]
                }
                index += 1
            }
            newArr.push(product)
            index = 0;
        }
        return newArr;
    }
}

