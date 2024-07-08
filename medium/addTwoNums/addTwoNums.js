/** 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse 
 * order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * explanation: 432 + 465 = 807
 * 
 * Example 2:
 * l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // given two singly-linked lists
    // the integers are stored in reverse order
    // each node represents a single digit

    // add the two numbers and return the sum as a linked list

    // we want to return the integer singly-linked lists and in reverse order

    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0){
        if (l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return list.next;
};