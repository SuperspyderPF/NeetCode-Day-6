/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
//  */

//  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

//  Example 1:
 
 
//  Input: root = [1,2,3,null,5,null,4]
//  Output: [1,3,4]
//  Example 2:
 
//  Input: root = [1,null,3]
//  Output: [1,3]
//  Example 3:
 
//  Input: root = []
//  Output: []
 var rightSideView = function(root) {
    var result = []
    if(!root) return result
    var queue = [root]
    while(queue.length > 0){
        var row = queue.length
        for(let i =0 ;i<row;i++){
            var cur = queue.shift()
            if(i === 0 ) result.push(cur.val)
            if(cur.right != null) queue.push(cur.right)
            if(cur.left != null) queue.push(cur.left)
            
        }
    }
    return result
    
};

///time and space O(n)