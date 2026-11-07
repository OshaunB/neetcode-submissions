class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let longestPrefix = ""
        let sortedStrs = strs.sort()
        let first = sortedStrs[0]
        let last = sortedStrs[sortedStrs.length-1]

        for(let i = 0; i< first.length; i++){
            if(first[i] === last[i]){
                longestPrefix += first[i]
            }else{
                return longestPrefix
            }
        }
        return longestPrefix
    }
    /*
    initialize longestPrefix = ""
    initialize a new sorted array: strs
    let first = first element, let last = last element
    for(let i= 0; i<first.length; i++){
        if(first[i] === last[i]){
            longestPrefix += ""
        }else{
            return longestPrefix
        }
    }

    return longest Prefix


    input: array of strings
    output: return longest common prefix

    if no common prefix return ""

    Input: strs = ["bat","bag","bank","band"]
    sorted: bat, bag, band, bank
    bat - bank

    two pointers?
    does the first char match up?
    add it to longest common

    the second char?
    add it to longest common

    the third?
    no?
    return longest common

    Output: "ba"
    all inputs start with ba

    Input: strs = ["dance","dag","danger","damage"]
    Output: "da"
    all inputs start with da

    Input: strs = ["neet","feet"]
    Output: ""
    no common prefix

    arrays
batk - bank
    



    */
}
