class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashmap = {};
        for(let i =0; i<strs.length; i++){
            let sortedKey = strs[i].split("").sort().join("")
            if(hashmap[sortedKey] === undefined){
                hashmap[sortedKey] = [strs[i]]
            }else if(hashmap[sortedKey]){
                hashmap[sortedKey].push(strs[i])
            }
        }
        return Object.values(hashmap)
    }
    /*PEDAC 
     initialize hashamp
    iterate through strings arr
        intialize a sortedKey = current char sorted
        if sortedkey === undefined, doesnt exist
            hashmap sortedkey = [strs[i]]
        else
            hashmap sortedkey.push(strs[i])

    return Object.values(hashmap)
    input:array of string
    output: array of arrays,containing strings

    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    Input: strs = ["x"]
    Output: [["x"]]

    Input: strs = [""]
    Output: [[""]]

    hashmap

  
    */
}
