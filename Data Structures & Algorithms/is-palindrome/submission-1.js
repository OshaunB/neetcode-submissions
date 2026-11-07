class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = ""
        function alphaCheck(char){
            return (
                (char >= "A" && char <= "Z") ||
                (char >= "a" && char <= "z") ||
                (char >= "0" && char <= "9")
            )
        }

        for(let c of s){
            if(alphaCheck(c)){
                newStr += c.toLowerCase()
            }
        }
        return newStr === newStr.split('').reverse().join('')
    }
    /*
    given a string, return true if palindrome
    
    Input: s = "Was it a car or a cat I saw?"
    Output: true

    //ignores all special chars
    use regex 
    [A-Z0-9]//ig

    initialize a new filteredString using regex from s, using .replace
    using filteredString 
        initialize two pointers
            let left = 0 
            let right = end of string. filteredString.length-1 

            using a while loop to move pointers 
            if left != right return false



    return true



    */
}
