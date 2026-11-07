class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let highestArea=0;
        let left = 0;
        let right = heights.length-1;
        while(left<right){
            if(heights[left]<heights[right]){
               let width = right-left;
               highestArea = Math.max(heights[left]*width, highestArea)
               left+=1;
            }else{
                let width = right-left;
                highestArea = Math.max(heights[right]*width, highestArea)
                right-=1;
            }
        }
        return highestArea;
    }
}
