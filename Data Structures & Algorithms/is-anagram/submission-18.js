class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length){
        return false
      }

      let freqCounter = {};
      for(let i =0; i<s.length;i++){
        if(!freqCounter[s[i]]){
            freqCounter[s[i]] = 1
        }else{
            freqCounter[s[i]] +=1
        }
      }
      
      for(let i=0;i<t.length;i++){
        if(!freqCounter[t[i]]){
            return false
        }else{
            freqCounter[t[i]] -= 1
        }
      }
      return true
    }
    /* 
    if s.length & t.length not the same length, return false
        - not anagram

    initialize a new empty hashmap
    iterate through s
        populate hashmap with the frequency of characters of s

    iterate through t
        check if the character is in s
            valid: subtract frequecny by one
            invalid: return false

    return true (we hit the end of the loop, all chars matched)


    input: strings, s & t
    output: boolean, true if the strings are anagrams
    false otherwise
    the exact same characters

    Input: s = "racecar", t = "carrace"
    Output: true
    s and t have the same characters,same length, 
    just rearranged

    data structure: hashmap

    we can use the hashmap to store the characters of s
    then compare them against the characters in t

    psuedocode:

    
    */
}
