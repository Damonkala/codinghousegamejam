/* global game */

var RemoteBomb = function (index, sprite, bomb, startX, startY) {
  var x = startX
  var y = startY
game.load.image('bomb', 'bomb.png', 64, 64)
  this.bomb = game.add.sprite(x, y, 'bomb')

  this.bomb.name = index.toString()


  this.lastPosition = { x: x, y: y }
}



window.RemoteBomb = RemoteBomb
