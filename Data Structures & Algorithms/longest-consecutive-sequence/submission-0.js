class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let mySet = new Set(nums);
        let longest = 0;
        for(let num of mySet){
            if(!mySet.has(num-1)){
                let count = 1;
                let curr = num

                while(mySet.has(curr+1)){
                    count+=1
                    curr+= 1
                }
                longest = Math.max(longest, count)
            }
        }
        return longest
    }
    

    }
    /*
    Input: nums = [2,20,4,10,3,4,5]
    Output: 4

    2,3,4,4,5,10,20
    set 
    2,3,4,5,10,20
    */

