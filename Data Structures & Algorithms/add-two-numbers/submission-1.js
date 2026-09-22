/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let num1 = 0
        let num2 = 0
        let deg1 = 1
        let deg2 = 1
        while (l1 != null || l2 != null) {
            if (l1 != null) {
                num1 = num1 + (l1.val * deg1)
                deg1 *= 10
                l1 = l1.next
                console.log(num1)
            }
            if (l2 != null) {
                num2 = num2 + (l2.val * deg2)
                deg2 *= 10
                l2 = l2.next
                console.log(num2)
            }
        }

        let num3 = num1 + num2
        let head = new ListNode(0)
        if (num3 === 0) {
            return head
        }
        let curr = head
        while (num3 != 0) {
            let val = num3 % 10
            num3 = Math.floor(num3/10)
            let tmp = new ListNode(val)
            curr.next = tmp
            curr = curr.next 
        }
        return head.next
    }
}
