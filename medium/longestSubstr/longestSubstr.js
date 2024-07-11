/** 
 * Given a string s, find the length of the longest substring without repeating characters. 
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke" with the length of 3
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring
 * 
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

	// input: a string s
	// output: the length of the longest substring without repeating characters
	

	// this is a sliding window problem
	// two pointers
	// we want to use a set 

	let charSet = new Set();
	let left = 0;
	let longest_length = 0;

	for (let r in s) {
		while (charSet.has(s[r])) {
			charSet.delete(s[l]);
			left++;
		}
		charSet.add(s[r]);
		longest_length = longest_length > r - left + 1 ? longest_length : r - left + 1;
	}

	return longest_length;
};

var lengthOfLongestSubstring_attempt1 = function(s) {
	// input: a string s 
    // output: the length of the longest substring without repeating characters

    // a variable to keep track of the longest substring w/o repeating characters
    let l_substr = '';

    // we start with the first character
    // bc its the first, we add it to the length which is fine
    // then we move to the second character
    // we see that the second character is not the same as first character, so we can add 
    // we move onto the third character
    // we see that it is a repeating character. 
    // so we stop this loop
    // and then we move that first pointer to the second letter now. (ex. w)


    // time: O(n^2)
    // space: O(n)

    let leftPointer = 0;

    while (leftPointer < s.length) {
        let substr = '';
        substr += s[leftPointer];

        for (let i = leftPointer + 1; i < s.length; i++) {
            if (substr.indexOf(s[i]) < 0) {
                substr += s[i];
            } else {
                break;
            }
        }

        l_substr = substr.length > l_substr.length ? substr : l_substr;
        leftPointer++;
    }

    // return the length of the found string
    return l_substr.length;
}