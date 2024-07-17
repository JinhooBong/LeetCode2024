/**
 * Given a string s, return the longest palindromic substring in s
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * 
 * "aba" is also valid
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let bestStart = 0;
    let bestEnd = 0;
    
    const performMiddleOut = (start, end) => {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
        }
        start++;
        end--;
        if (end - start + 1 > bestEnd - bestStart + 1) {
            bestStart = start;
            bestEnd = end;
        }
    };

    for (let i = 0; i < s.length; i++) {
        performMiddleOut(i, i)
        performMiddleOut(i, i + 1)
    }

    return s.slice(bestStart, bestEnd + 1);
};