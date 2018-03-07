// 进行同层级对比
function diff (oldTree, newTree) {
  var index = 0;
  var patches = {};
  diffsTree(oldTree, newTree, index, patches);
  return patches
}

function diffsTree(oldNode, newNode, index, patches) {
  var currentPatch = [];

  if (newNode === null) {
    // 节点移除
  } else if (_.isString(oldNode) && _.isString(newNode)) {
    // 如果是文字节点，判断是否相同
    if (oldNode !== newNode) currentPatch.push({type: patch.TEXT, content: newNode})
  } else if (
    oldNode.tagName === newNode.tagName &&
    oldNode.key === newNode.key
  ) {
    var attributesPatches = diffAttributes(oldNode, newNode);
    if (attributesPatches) currentPatch.push({type: patch.PROPS, props: propsPatches});

    // 如果需要忽视该节点
    if(!isIgnoreChildren(newNode)) {

    }
  } else {
    currentPatch.push({type: patch.REPLACE, node: newNode});
  }

  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

function diffAttributes (oldNode, newNode) {
  var count = 0;
  var oldAttributes = oldNode.attributes;
  var newAttributes = newNode.attributes;

  var key, oldValue, newValue;
  var attributesPatches = {};

  for (key in oldAttributes) {
    oldValue = oldAttributes[key];
    newValue = newAttributes[key];
    if (newValue !== value) {
      count++;
      attributesPatches[key] = newValue;
    }
  }
 
  for (key in newAttributes) {
    if (!oldAttributes.hasOwnProperty(key)) {
      count++;
      attributesPatches[key] = newAttributes[key];
    }
  }

  if (count === 0) {
    return null
  }

  return attributesPatches;

}

function isIgnoreChildren (node) {
  return false
}

window.diff = diff;