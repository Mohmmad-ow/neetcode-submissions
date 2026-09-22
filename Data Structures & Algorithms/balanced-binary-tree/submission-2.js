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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) {
            return true
        }
        return this.dfs(root, 0) !== -1 ? true : false
    }
    /**
     * @param {TreeNode} node
     * @param {number} height
     * @return {number}
     */
    dfs(node, height) {
        if (node === null) {
            return height
        }
        const left = this.dfs(node.left, height+1)
        const right = this.dfs(node.right, height+1)
        const diff = Math.abs(left - right)
        return diff <= 1 ? Math.max(left, right) : -1
    }
}
