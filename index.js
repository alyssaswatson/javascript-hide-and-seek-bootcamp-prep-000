function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (i = 1).toString()
}
}
