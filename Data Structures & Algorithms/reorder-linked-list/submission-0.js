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
     * @return {void}
     */
    reorderList(head) {
        if (head.next === null) {
            return head
        }
        // Grab Length
        let len = 1
        let curr = head
        while (curr != null) {
            curr = curr.next
            len++
        }
        // this.printList(head)
        // Get head (soon to be tail) of list2
        let list2 = head
        for (let i = 0; i < Math.round(len/2)-1; i++) {
            list2 = list2.next
        }
        
        let head_2 = list2.next
        list2.next = null
        // reverse list2
        // this.printList(head_2)
        head_2 = this.reverseList(head_2)
        // this.printList(head_2)
        curr = head
        while (curr != null && head_2 != null) {
            let next1 = curr.next
            curr.next = head_2
            let next2 = head_2.next
            head_2.next = next1
            curr = next1
            head_2 = next2
        }
        
        return head
    }
    reverseList(head) {
        let prev = head
        let curr = head.next
        prev.next = null
        while (curr != null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
    printList(head) {
        let output = ""
        while (head != null) {
            output += head + "->"
        }
        return output
    }
}
