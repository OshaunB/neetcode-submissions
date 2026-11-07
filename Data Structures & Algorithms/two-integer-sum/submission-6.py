class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dictionary = {}

        for index, num in enumerate(nums):
            difference = target - num
            if difference in dictionary:
                return [dictionary[difference],index ]
            dictionary[num] = index


"""
initialize hashmap = {}

iterate through the nums array
    intialize difference = target - current_num
    check if difference is in the hashmap
        return [current index, index stored in hash]
    store current number from the loop and index in hash

every test case has a ans
"""




        