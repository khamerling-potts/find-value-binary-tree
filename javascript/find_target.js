class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  if (!root) {
    return null;
  }
  if (root.value === target) return root;
  return root.value < target
    ? findTarget(root.right, target)
    : findTarget(root.left, target);
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));

  const root2 = new Node(
    10,
    new Node(1, new Node(0)),
    new Node(20, new Node(15, null, new Node(17)))
  );
  console.log("expecting node with val 15");
  console.log(findTarget(root2, 15));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
