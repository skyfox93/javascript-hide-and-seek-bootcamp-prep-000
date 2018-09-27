function getFirstSelector(query){return document.querySelector(query)}
function nestedTarget(){document.querySelector('#nested .target')}
function increaseRankBy(n){var list=document.querySelectorAll('.ranked-list'); for(var i=0;i<list.length;i++){list[i].innerText=parseInt(list[i].innerText)+n}}
function deepestChild(){
  var list=document.querySelector('#grand-node');
  var depth=0;
  var recordDepth=0;
  var deepest;
  function iterate(element){if(element.childen.length){var children=element.children;depth++;if(depth>recordDepth){recordDepth=depth;deepest=children[0];}for(var i=0;i<children.length;i++){iterate(children[0]);depth--;}}}} iterate(list);
