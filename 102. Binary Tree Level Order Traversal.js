/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    var result =[]
    var queue = [root]
    while(queue.length > 0){
        queue.push(null)
        const level = []
        let head
        while(head = queue.shift()){
            level.push(head.val)
            if(head.left) queue.push(head.left)
            if(head.right) queue.push(head.right)
        }
        result.push(level)
    }
    return result 
    
};

///time and space O(n)