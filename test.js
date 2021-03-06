var getIntersectionNode = function(headA, headB) {

  function countNodeLength (node, count) {
      if (node.next !== null) {
          count += 1;
          countNodeLength(node.next, count)
      } else {
          count++
          console.log(count)
          return count;
      }

  }

  let countA = countNodeLength(headA, 0);
  let countB = countNodeLength(headB, 0);

  console.log('countA: ', countA, 'countB: ', countB)

  let longer = countA >= countB ? headA : headB;
  let shorter = countA <= countB ? headA : headB;

  function traverseNode (nodeA, nodeB) {
      if (nodeA.val === nodeB.val) {
          console.log(nodeA.val)
      } else {
          traverseNode(nodeA.next, nodeB.val);
      }
  }
};

let node1 = {val: 1, next: {val: 2, next: {val: 3, next: null}}};

let node2 = {val: 1, next: {val: 2, next: null}};

getIntersectionNode(node1, node2);