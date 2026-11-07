class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = {}
        for word in strs:
            sorted_word = ''.join(sorted(word))
            if sorted_word in hashmap:
                hashmap[sorted_word].append(word)
            else:
                hashmap[sorted_word] = [word]
        print(hashmap.values())
        return list(hashmap.values())
    



# initialize empty hashmap

# iterate thorugh strs
#     sort current word
#     if sorted_word is in hashmap
#         hashmap[sorted_word].append(word)
#     else:
#         hashmap[sorted_word] = [word]
    
#     return hashmap.values() 


# input: list of strings
# output: list of list


# Input: strs = ["act","pots","tops","cat","stop","hat"]
# Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

# Input: strs = [""]
# Output: [[""]]

# Input: strs = ["x"]
# Output: [["x"]]
# # if one thing return that element in a list still

# hashmap
# sorted keys