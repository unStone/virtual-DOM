// 进行同层级对比
function diff (oldTree, newTree) {
  var index = 0;
  var patches = {};
  diffNodes(oldTree, newTree, index, patches);
  return patches
}

function diffNodes(oldNode, newNode, index, patches) {
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

    // 如果不忽视该节点
    if(!isIgnoreChildren(newNode)) {
      diffChildren(
        oldNode.children,
        newNode.children,
        index,
        patches,
        currentPatch
      )
    }
  } else {
    currentPatch.push({type: patch.REPLACE, node: newNode});
  }

  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

function diffChildren (oldChildren, newChildren, index, patches, currentPatch) {
  // 对比子节点 TODO

}

function diffAttributes (oldNode, newNode) {
  var count = 0;
  var oldAttributes = oldNode.attributes;
  var newAttributes = newNode.attributes;

  var key, oldValue, newValue;
  var attributesPatches = {};

  // 如果属性不一致，则都用新的node节点的属性
  for (key in oldAttributes) {
    oldValue = oldAttributes[key];
    newValue = newAttributes[key];
    if (newValue !== oldValue) {
      count++;
      attributesPatches[key] = newValue;
    }
  }
 
  // 老节点不存在的属性，使用新的node节点的属性
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
  // 是否忽视diff TODO
  return false
}

window.diff = diff;