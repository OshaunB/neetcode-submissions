class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1){
            return [[strs[0]]]
        }
        let dictionary = {};
        for(let i=0; i<strs.length; i++){
            let sorted = strs[i].split('').sort().join('')
            if(dictionary[sorted] !== undefined){
                dictionary[sorted].push(strs[i])
            }else{
                dictionary[sorted] = [strs[i]]
            }
        }
        return Object.values(dictionary)
    }
}

/*
initialize hash

loop through strings 
    save in varable called sorted = sort current character
    if  sortedKey exists
        hash sorted key . push(currchar)
    if currchar key doesnt exist
        hash sortedKey = [currchar]

    return Object.values(hash)

{
    act: ['act', 'cat']
}

array of strings
array of sub arrays

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

every word thats uni gets its own array with array
words that have same characters get roommates

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]

hashmap

*/
