class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqCount = {};
        let newArr = [];

        for(let i = 0; i<nums.length; i++){
            if(freqCount[nums[i]]!==undefined){
                freqCount[nums[i]]+=1
            }else{
                freqCount[nums[i]] = 1
            }
        }
        while(newArr.length !== k){
            let largestKey = 0;
            let largestVal = 0;
            for(let key in freqCount){
                if(freqCount[key] > largestVal){
                    largestVal = freqCount[key]
                    largestKey = key
                }
            }
            delete freqCount[largestKey]
            newArr.push(largestKey)
        }
        return newArr
    }
}
/*PEDAC

initialize a freqCount, {}
initialize a new array, []
iterate through nums
    populate freqcount

{
    1:1,
    2:2,
    3:3,
}

while(newArr.length !== k){
    let largestKey = 0;
    let largestVal = 0;
    for(let key in freqCount){
        if(freqCount[key] > largestVal){
            largestVal = freqCount[key]
            largestkey = key
        }
    }
    delete freqCount[largestKey]
    newArr.push(largestKey)
}
return newArr

}

array of nums, integer k
return k most frequent elements

Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Input: nums = [7,7], k = 1
Output: [7]

hashmap


*/
