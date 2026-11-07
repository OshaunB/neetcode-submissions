class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest=0,hash={},left=0;
        for(let right=0; right<s.length; right++){
            while(hash[s[right]]){
                delete hash[s[left]];
                left++;
            }
            hash[s[right]]=1
            longest=Math.max(longest, right-left+1)
        }
        return longest
    }
    /*
    initialize longest, 0
    initialize hash, {}
    initialize left, 0

    iterate through s, right =0, right<s.length, right++
        while val right is in the hash
            delete hash left
            left ++

        hash right = 1
        longest = Math.max(longest, right - left+1)
    input string, s
    output int, length of longest substring without dupes

    Input: s = "zxyzxyz"
    Output: 3

    Input: s = "xxxx"
    Output: 1

    sliding window
    b/c substring and continously updating data

    what are we keeping track of?
    longest length of substring, longest
    start of window, left
    if charater of right in the hash

    A:
    
    */
}
