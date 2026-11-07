class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /[^A-Z0-9]/ig
        let filteredString = s.replace(regex, '').toLowerCase()
        let left =0
        let right = filteredString.length-1
        while(left < right){
            if(filteredString[left] != filteredString[right]){
                return false
            }
            left += 1
            right -= 1
        }
        return true
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
            if left = right return true



    return false



    */
}
