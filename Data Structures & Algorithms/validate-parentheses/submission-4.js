class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let dict = {
            '(':')',
            '{':'}',
            '[':']'
        }

        for(let i = 0; i<s.length; i++){
            if(dict[s[i]]){
                stack.push(dict[s[i]])
            }else if(stack.pop() !== s[i]){
                return false
            }
        }
        return stack.length === 0;
    }
}