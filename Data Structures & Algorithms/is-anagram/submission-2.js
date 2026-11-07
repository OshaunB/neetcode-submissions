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
        for(let i =0; i<s.length; i++){
            if(freqCounter[s[i]] == undefined){
                freqCounter[s[i]] = 1
            }else{
                freqCounter[s[i]] += 1
            }
        }

        for(let j =0; j<t.length; j++){
            if(freqCounter[t[j]] === undefined){
                return false
            }else if(freqCounter[t[j]]){
                freqCounter[t[j]] -= 1
            }
            if(freqCounter[t[j]] === 0){
                delete freqCounter[t[j]]
            }
        }
        return true
    }
    /*PEDAC 
    
    initialize freqCounter
    iterate through s (for loop)
        populate freqCounter
        
    iterate through t
       if current character of t isnt in s 
        return false
        else if 
            current character of t is in freqcounter 
                freqCounter[t[i]] -= 1

    return true

    Input: 2 strings, s&t
    output: boolean
    return true if these two string are anagrams
        else false

    Input: s = "racecar", t = "carrace"
    Output: true
    same characters just a different order, makes them anagrams

    Input: s = "jar", t = "jam"
    Output: false
    different characters

    hashmap

   



    */
}
