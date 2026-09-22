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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head
        let slow = head
        while (fast != null) {
            fast = fast.next
            slow = slow.next
            if (fast != null) {
                fast = fast.next
            } else {
                return false
            }
            if (fast === slow) {
                return true
            }
        }
        return false
        
    }
}
