class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) return false;

    let count = {};

    // Count characters in string s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract counts using string t
    for (let char of t) {
        if (!count[char]) return false; // char not found or count drops below zero
        count[char]--;
    }

    return true;
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
