class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False  

        frequency_counter = {}
        for letter in s:
            if letter not in frequency_counter:
                frequency_counter[letter] = 1
            else:
                frequency_counter[letter] += 1
        
        for letter in t:
            if letter not in frequency_counter:
                return False
            elif frequency_counter[letter] <= 0:
                return False
            else:
                frequency_counter[letter] -= 1
        
        return True
            

        