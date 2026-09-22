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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0
        let node = new ListNode()
        node.next = head
        head = node
        let curr = head
        this.printList(head)
        while (curr != null) {
            curr = curr.next
            len++
        }
        if (len === 1) {
            return null
        }
        let idx = len - n
        console.log(len, idx)
        curr = head
        for (let i = 1; i < idx; i++) {
            curr = curr.next
        }
        this.printList(curr)
        if (curr.next) {
            curr.next = curr.next.next
        }
        return head.next
    }
    printList(head) {
        let res = ""
        while (head != null) {
            res += head.val + "->"
            head = head.next
        }
        console.log(res)
    }
}
