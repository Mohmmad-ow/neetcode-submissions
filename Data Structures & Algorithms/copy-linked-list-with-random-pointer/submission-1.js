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
        let arr = []
        let len = 0
        let curr = head
        while (curr != null) {
            arr[len] = new Node(curr.val, null, null)
            curr = curr.next
            len++
        }
        console.log(arr)
        curr = head
        let list = new Node(0)
        let ans = list
        let i = 0
        while (curr != null) {
            ans.next = arr[i]
            ans = ans.next
            // ans.random = ?
            if (curr.random != null) {
                let x = this.getIndex(curr.random)
                let idx = len-x
                ans.random = arr[idx]
            }
            i++
            
            curr = curr.next
        }
        console.log(arr)

        return list.next
    }
    getIndex(node) {
        let x = 0
        while (node != null) {
            node = node.next
            x++
        }
        return x
    }
        
}


