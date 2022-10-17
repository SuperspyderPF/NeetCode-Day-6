class Node{
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}
var a = new Node(4)
var b = new Node(2)
var c = new Node(7)
var d = new Node(1)
var e = new Node(3)
var f = new Node(6)
var g = new Node(9)

a.left = b
a.right = c
b.right = e
b.left = d
c.right = g
c.left = f

function BFS(root){
    var queue = [ root ]
    while(queue.length > 0){
        const curr = queue.shift()
        alert(curr.val)
        
        if(curr.left !== null){
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
        
    }
    return root 
    
}
var invertTree = function(root) {
    if(!root) return null;
    const queue = [];
    queue.push(root);
    while(queue.length > 0){
        let cut = queue.shift();
        let temp = cut.left;
        cut.left = cut.right;
        cut.right = temp;
        if(cut.left){
            queue.push(cut.left);
        }
        if(cut.right){
            queue.push(cut.right)
        }
    }
    return root;
};
function DFS(root){
    var stack = [ root ]
    while(stack.length > 0){
        const curr = stack.pop()
        alert(curr.val)
        if(curr.right !== null){
            stack.push(curr.right)
        }
        if(curr.left !== null){
            stack.push(curr.left)
        }
    }
    
    
}
function DFS1(root){
    const stack = [ root ]
    while(stack.lenght > 0 ){
        const curr = stack.pop()
        alert(curr.val)
        if(curr.left !== null){
            stack.push(curr.left)
        }
        if(curr.right !== null){
            stack.push(curr.right)
        }
        
    }
}

function inorderTraversal(root) {
  const nodes = [];

  if (root !== null) {
    nodes.push(...inorderTraversal(root.left),root.val,...inorderTraversal(root.right));
  }

  return nodes;
}

var rightSideView = function(root) {
    let res = []
    function traverse(node, depth){
        if(!node){
            return 
        }
        if(!res[depth]){
          res[depth] = node.val
        }
        
        traverse(node.right, depth + 1)
        traverse(node.left, depth + 1)
        
    }
    traverse(root, 0)
    return res
};

var rightSideView3 = function(root) {
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

var BFSARRAY = function(root) {
    const result = [];
    if (root === null) return result;
    
    const queue = [root];
    
    while (queue.length !== 0) {
        const row = queue.length;
        const cur = queue.shift();
        
        if (cur.left != null) queue.push(cur.left);
        if (cur.right != null) queue.push(cur.right);
        
        result.push(cur.val)
    }
    return result;
};

var DFSARRAY = function(root) {
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
    return result;
};

var DFSARRAYKTH = function(root, k) {
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
    var jzx = result.sort((a,b)=>a-b)
    var idx = k - 1 
    return jzx[idx]
};


var preorderTraversal = function(root) {
    if(root == null){
        return []
    }
    const stack = []
    const result = []
    stack.push(root)
    while(stack.length > 0){
        let current = stack.pop()
        result.push(current.val)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return result 
};

function inorderTraversal(root) {
  const nodes = [];

  if (root !== null) {
    nodes.push(...inorderTraversal(root.left),root.val,...inorderTraversal(root.right));
  }

  return nodes;
}
alert(inorderTraversal(a))

 