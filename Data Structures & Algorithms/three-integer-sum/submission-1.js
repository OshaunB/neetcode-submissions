class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        let sortedNums = nums.sort((a, b) => a - b)
        console.log(sortedNums)
        for(let i =0; i<nums.length-1;i++){
            if(i>0 && sortedNums[i] === sortedNums[i-1]){
                continue;
            }
            let left = i+1
            let right = nums.length-1
            while(left<right){
                let sum = sortedNums[i] + sortedNums[left]+ sortedNums[right]
                if(sum>0){
                    right-=1
                }else if(sum<0){
                    left+=1
                }else{
                    res.push([sortedNums[i],sortedNums[left],sortedNums[right]])
                    left+=1
                    while(left<right && sortedNums[left] === sortedNums[left-1]){
                        left+=1
                    }
                }
            }
        }
        return res
    }
    /*
     given an integer array, nums
     return all triplets that add up to 0, indicies must be different
    - no duplicates

    pseudocode
    initiailize a res array = res
    Input: nums = [-1,0,1,2,-1,-4]
    let sorted = sorted nums
    [-4,-1,-1,0,1,2]
    iterate through the sorted nums
    for(let i =0;i<nums.length-1;i++){
        if(i<0 && sortedNums[i] === sortedNums[i-1]){
            continue;
        }
        let left = i+1
        let right = nums.length-1
        while(left<right){
            let sum = sortedNums[i]+sortedNums[left]+sortedNums[right]
            if(sum>0){
                right-=1
            }else if(sum<0){
                left+=1
            }else{
                res.push([sortedNums[i],sortedNums[left],sortedNums[right]])
                left+=1
                while(left<right && sorted[left] === sortedNums[left-1]){
                    left+=1
                }
            }

        }
        return res
    }

    */
}
