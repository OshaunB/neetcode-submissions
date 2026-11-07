class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freqCounter ={};
        for(let i =0; i<s.length;i++){
            if(!freqCounter[s[i]]){
                freqCounter[s[i]] = 1
            }else{
                freqCounter[s[i]] +=1
            }
        }

        for(let i = 0; i<t.length; i++){
            if(!freqCounter[t[i]]){
                return false
            }else{
              freqCounter[t[i]] -= 1  
            }
            if(freqCounter[t[i]] === 0){
                delete freqCounter[t[i]]
            }
        }
        return Object.values(freqCounter).length === 0
    }
    /*PEDAC
    
    initialize freqCounter, empty hash
    iterate through s and populate freqCounter
        now we have how many times each character should appear

    iterate through t
        if theres a character of t thats not in freqCounter
            return false
        
        subtract one from the freqCounter
        if the value is now zero then
            delete the key value pair

    return freqCounter.values.length === 0 
    input: s & t, strings
    output: true if anagrams, false otherwise

    Input: s = "racecar", t = "carrace"
    Output: true
    have the same characters, true

    Input: s = "jar", t = "jam"
    Output: false
    have different characters, false

    hash
    use frequency counter to keep track of chracters in s
    compare that against the characters in t

    i




    */
}
