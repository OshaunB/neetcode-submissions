class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // TESTING FROM CHAT GPT!!!!!!!!!

         if (s.length !== t.length) return false;

  const freq = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!freq[char]) return false;   // missing or used up
    freq[char] -= 1;
  }

  // lengths are equal + we never went negative → must be anagram
  return true;
    }
    /* 
    if different length return false
    initialize a empty hashmap, freqCounter = {}
    iterate through s
        populate freqcounter with character count of s

    iterate through t
        if(character in t not in hash){
            return false
        }
    return true
    given two strings s and t
    return true if the strings are an anagram of each other
    otherwise return false

    exact same characters, same length implied

    Input: s = "racecar", t = "carrace"
    Output: true

    Input: s = "jar", t = "jam"
    Output: false

    different characters
    
    hashmap

   
    */
}
