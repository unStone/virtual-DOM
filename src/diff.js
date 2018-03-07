// 进行同层级对比
function diff (oldTree, newTree) {
  var index = 0;
  var patches = {};
  diffsTree(oldTree, newTree, index, patches);
  return patches
}

function diffsTree(oldTree, newTree, index, patches) {
  
}