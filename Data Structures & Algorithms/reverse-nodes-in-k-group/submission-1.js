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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let nodes = []
        let curr = head
        while (curr != null) {
            nodes.push(curr)
            curr = curr.next
        }
        if (nodes.length === 1) {
            return nodes[0]
        }
        
        for (let i = 0; i < nodes.length; i++) {
            let section = Math.floor(i / k) + 2    
            if (i % k === 0) {
                let idx = (section * k) - 1
                if (idx > nodes.length - 1) {
                    idx = k * (Math.floor(i / k) + 1)
                    if (idx > nodes.length - 1) {
                        nodes[i].next = null
                    } else {
                        nodes[i].next = nodes[idx]
                    }
                } else {
                    nodes[i].next = nodes[idx]
                }
            } else {

                nodes[i].next = nodes[i - 1]
            }
        }
        if (nodes.length % k !== 0) {
            nodes[nodes.length-1].next = null
            console.log("-Here")
            for (let i = Math.floor(nodes.length / k) * k; i < nodes.length-1; i++) {
                console.log(i)
                nodes[i].next = nodes[i+1]
            }
        }
        console.log(nodes, nodes[k - 1])
        return nodes[k - 1]
    }
}
