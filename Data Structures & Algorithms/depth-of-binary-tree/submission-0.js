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
     * @return {number}
     */
    maxDepth(root) {
        const dfs = (node, depth) => {
            if (node !== null) {
                return Math.max(dfs(node.left, depth+1), dfs(node.right, depth+1))
            }
            return depth
        }
        return dfs(root, 0)
    }
}
