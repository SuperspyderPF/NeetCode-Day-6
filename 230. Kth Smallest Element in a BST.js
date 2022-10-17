/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    // push all values to array using dfs 
    const result = [];
    if (root === null) return result;
    
    const queue = [root];
    
    while (queue.length !== 0) {
        const row = queue.length;
        const cur = queue.pop();
        
        if (cur.right != null) queue.push(cur.right);
        if (cur.left != null) queue.push(cur.left);
        
        
        result.push(cur.val)
    }
    // sort array and return index of k 
    var jzx = result.sort((a,b)=>a-b)
    var idx = k - 1 
    return jzx[idx]
};
//time and space O(n)