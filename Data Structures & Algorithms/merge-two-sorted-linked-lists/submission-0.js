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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null && list2 === null) {
            return null
        }
        let head = new ListNode()
        let curr = head
        while (list1 != null || list2 != null) {
            if (list1 === null) {
                curr.next = list2
                list2 = null
            } else if (list2 === null) {
                curr.next = list1
                list1 = null
            } else {
                if (list1.val < list2.val) {
                    let newNode = new ListNode(list1.val, null)
                    curr.next = newNode
                    curr = curr.next
                    list1 = list1.next
                } else {
                    let newNode = new ListNode(list2.val, null)
                    curr.next = newNode
                    curr = curr.next
                    list2 = list2.next
                }
            }
        }
        return head.next
    }
}
