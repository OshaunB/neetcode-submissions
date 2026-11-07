class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashmap = {};
        for(let i =0; i<strs.length; i++){
            let sortedKey = strs[i].split('').sort().join('')
            if(hashmap[sortedKey]){
                hashmap[sortedKey].push(strs[i])
            }else{
                hashmap[sortedKey] = [strs[i]]
            }
        }
    return Object.values(hashmap)
    }
}