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

      let freqCounter = {}

      for(let i =0; i<s.length; i++){
        if(freqCounter[s[i]]){
          freqCounter[s[i]] += 1
        }else{
          freqCounter[s[i]] = 1
        }
      }

      for(let i =0; i<t.length; i++){
        if(freqCounter[t[i]]){
          freqCounter[t[i]] -= 1
        }else{
          return false
        }
      }

      return true
    }
    /*
    
     if lengths are different, return flase
    initialize empty hashmap

    iterate through s
      populate hashmap with frequency of characters

    iterate though t
      check if the current char in t, is in the hash as truthy
        hashamp currect char frequency -= 1
      else return false

      return true



    i: s and t, strings
    o: boolean

    return true if anagrams
    false otherwise

    exact same characters
      - order of the characters can be different

    Input: s = "racecar", t = "carrace"
    Output: true
    
    Input: s = "jar", t = "jam"
    Output: false
    different characters

    hashmap
      - keep track of characters 
      - compare characters between strings
        - if different char, return false

    

    */
}
