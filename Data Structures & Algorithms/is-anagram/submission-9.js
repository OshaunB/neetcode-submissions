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

        let freqCount = {};
        for(let i =0; i<s.length; i++){
            if(freqCount[s[i]] == undefined){
                freqCount[s[i]] = 1
            }else{
                freqCount[s[i]] += 1
            }
        }
        console.log(freqCount)

        for(let i =0; i<t.length; i++){
            if(!freqCount[t[i]]){
                return false
            }else{
                freqCount[t[i]] -= 1
            }
        }
        return true
    }
    /* if different length return flase

    itialize hashmap
    iterate through s
        populate hashmap

    iterate through t
        check if hash has the current character in t
            decrement key value pair
        else return false

        if key value = 0;
            delete key

    return true
    input: strings, s and t
    output: boolean, anagrams? true, false

    Input: s = "racecar", t = "carrace"
    Output: true
    same characters different arrangements -> true


    Input: s = "jar", t = "jam"
    Output: false
    different character -> false

    hashmap

   


    */
}
