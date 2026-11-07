class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }

        let freqCounter = {};
        for(let i =0; i<s.length; i++){
            if(freqCounter[s[i]] === undefined){
                freqCounter[s[i]] = 1
            }else{
                freqCounter[s[i]] +=1
            }
        }

        for(let i =0; i<t.length; i++){
            if(!freqCounter[t[i]]){
                return false
            }
            freqCounter[t[i]] -=1
        }
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
