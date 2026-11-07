import math
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        buy_day = 0
        for index, price in enumerate(prices):
            sell_day = index
            if price < prices[buy_day]:
                buy_day = index
            
            max_profit = max(max_profit, prices[sell_day] - prices[buy_day])
        return max_profit


"""
in: list, prices - num (price)

buy on one day
sell in future

return max profit, 0 
---
max_profit = 0
buy_day = math.inf
for index, price in enumerate(prices)
    sell_day = index
    if price < buy_day:
        buy_day = index
        
    max_profit = max(max_profit, prices[sell_day] - prices[buy_day])



buy_day = index 1
sell_day = loop index 4





"""