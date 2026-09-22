// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map()
        let curr = head
        while (curr != null) {
            map.set(curr, new Node(curr.val))
            curr = curr.next
        }
        curr = head
        let ans = new Node(0)
        let temp = ans
        while (curr != null) {
            // map[curr].next = map[curr.next]
            map.get(curr).next = map.get(curr.next) || null
            // map[curr].random = map[curr.random]
            map.get(curr).random = map.get(curr.random) || null
            temp.next = map[curr]
            temp.next = map.get(curr)
            temp = temp.next
            curr = curr.next
        }
        return ans.next
    }    
}


