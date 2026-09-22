/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (q === null && p === null) {
            return true
        }
        if (q === null || p === null) {
            return false
        }
        return q.val === p.val && this.isSameTree(q.right, p.right) && this.isSameTree(q.left, p.left)

    }
}
