/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:
 * Input: x = 121
 * Output: True
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * 
 * Example 3
 * Input: x = 10
 * Output: false
 * 
 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // input: an integer x
    // output: boolean value taht determines if it's a palindrome or not

    // anytime a number is negative, it will not be a palindrome
    // if (x < 0) return false; 
    
    // let divider = 1;

    // while (x >= 10 * divider) {
    //     divider *= 10;
    // }

    // while (x) {
    //     let right = x % 10;
    //     let left = Math.floor(x / divider);

    //     if (left != right) return false;

    //     x = x % divider;
    //     x = Math.floor(x / 10);
    //     divider = divider / 100;
    // }

    // return true;

      if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};  