/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D, M
 * I: 1
 * V: 5
 * X: 10
 * L: 50
 * C: 100
 * D: 500
 * M: 1000
 * 
 * For example, 2 is written as II in roman numeral, just two ones added together. 12 is written
 * as XII which simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four
 * is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90.  
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * 
 * Example 2: 
 * Input: s = "LVIII"
 * Output: 56
 *
 * 
 */



/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // input: a string s
    // output: the integer value of the string s

    // create a global sum variable to keep track of the value
    let sum = 0;

    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    // if a smaller value precedes a larger value, it usually means it's substracting 
    // so as we iterate through the string s, 
    // we check to see if the next string is larger, if so, we add the negative value of it, 
    // else we add the value 

    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanValues[s[i]] < romanValues[s[i+1]]) {
            // sum += negative of s[i]
            sum -= romanValues[s[i]]
        } else {
            sum += romanValues[s[i]]
        }
    }

    return sum;
};


// Solution 2 
var romanToInt = function(s) {
	const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};