class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedGroups = {};
        for(let i =0; i<strs.length; i++){
            let sortedString = strs[i].split("").sort().join("")
            if (sortedGroups[sortedString] !== undefined){
                sortedGroups[sortedString].push(strs[i])
            }else{
                sortedGroups[sortedString] = [strs[i]]
            }
        }
        return Object.values(sortedGroups)
    }
}