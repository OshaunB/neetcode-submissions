class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []
        let dictionary = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        for(let i =0; i < s.length; i++){
            if(dictionary[s[i]]){
                if(stack.pop() != dictionary[s[i]]) return false
            }else{
                stack.push(s[i])
            }
        }
        return stack.length === 0
    }
}
/*PEDAC

initialize a stack, let stack = []
initialize a dictionary, let dictionary = {
    "}" : "{"
    "]" : "["
    ")" : "("
}

loop through the string

check if adjecent para(curr) is in the stack
push the current char into the stack

if is in the stack, pop from the stack

if stack.length = 0
return true

P:given a string 
consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type

true if s is a valid string, and false otherwise

E:
s = "[]"
true

s = "([{}])"
Output: true

Input: s = "[(])"
Output: false

D: stack

A:

initialize a stack, let stack = []
initialize a dictionary, let dictionary = {
    "}" : "{"
    "]" : "["
    ")" : "("
}

loop through the string

check if adjecent para(curr) is in the stack
push the current char into the stack

if is in the stack, pop from the stack

if stack.length = 0
return true

*/