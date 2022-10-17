/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(p === null && q === null) return true 
    if((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)){
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    
};


//time O(n) space O(n) where n is the shortest number of nodes between q and p 