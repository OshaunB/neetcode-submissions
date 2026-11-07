class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashmap = {};
        let left = 0;
        let longest = 0;
        let maxFreq = 0;
        for(let right=0; right<s.length; right++){
            if(!hashmap[s[right]]){
                hashmap[s[right]] = 1
            }else{
                hashmap[s[right]] += 1
            }
            if(hashmap[s[right]] > maxFreq){
                maxFreq=hashmap[s[right]]
            }
            while((right-left+1)- maxFreq > k){
                hashmap[s[left]]-=1
                left++;
            }
            longest= Math.max(right-left+1, longest)
        }
        return longest
    }
    /*
    input:string, integer


    s="XYYX"
    k=2

    solution 4

    Input: s = "AAABABB", k = 1
    5

    initialize a freqCounter {}
    let longest=0;
    let left =0;
    iterate through string. right = 0
        if(!freqCounter[s[i]]){
            freqCounter[s[i]] = 1
        }else{
            freqCounter[s[i]] +=1
        }

        




    */
}
