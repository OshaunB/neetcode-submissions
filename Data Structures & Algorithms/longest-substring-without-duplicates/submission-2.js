class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let freqCounter = {};
        let left = 0;
        for(let right=left;right<s.length;right++){
            if(freqCounter[s[right]] !== undefined){
                while(freqCounter[s[right]]){
                    delete freqCounter[s[left]]
                    left+=1
                }
            }
            freqCounter[s[right]] = true
            longest = Math.max(right-left+1,longest)
        }
        return longest
    }
}
