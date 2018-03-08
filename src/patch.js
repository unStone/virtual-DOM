var REPLACE = 0
var REORDER = 1
var PROPS = 2
var TEXT = 3

function patch (oldTree, patches) {
  console.log(oldTree, patches);
}
patch.REPLACE = REPLACE;
patch.REORDER = REORDER;
patch.PROPS = PROPS;
patch.TEXT = TEXT;

window.patch = patch;