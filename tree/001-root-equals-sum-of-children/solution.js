var checkTree = function(root) {
    return root.val === root.left.val + root.right.val;
};

export function run() {
    const tree1 = TreeNode(10, TreeNode(4), TreeNode(6));
    const tree2 = TreeNode(5, TreeNode(3), TreeNode(1));
    console.log("Example 1: for TreeNode", tree1, ', ', checkTree(tree1)); // true
    console.log("Example 2: for TreeNode", tree2, ', ' ,checkTree(tree2)); // false
  }
  

// Sample TreeNode structure
function TreeNode(val, left = null, right = null) {
    return { val, left, right };
}

// In leetcode
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */