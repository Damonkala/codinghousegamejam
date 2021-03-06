/* global game */

var RemotePlayer = function (index, game, player, startX, startY) {
  var x = startX
  var y = startY

  this.game = game
  this.health = 3
  this.player = player
  this.alive = true
game.load.image('dude', 'assets/character.png', 64, 64)
  this.player = game.add.sprite(x, y, 'dude')

  // this.player.animations.add('move', [0, 1, 2, 3, 4, 5, 6, 7], 20, true)
  // this.player.animations.add('stop', [3], 20, true)

  //this.player.anchor.setTo(0.5, 0.5)

  this.player.name = index.toString()
  //this.player.body.immovable = true
  //this.player.body.collideWorldBounds = true
  //this.player.body.bounce.y = 0.2;
  //this.player.body.gravity.y = 300;


  this.lastPosition = { x: x, y: y }
}

RemotePlayer.prototype.update = function () {
  if (this.player.x !== this.lastPosition.x || this.player.y !== this.lastPosition.y) {
    this.player.play('move')
    //this.player.rotation = Math.PI + game.physics.angleToXY(this.player, this.lastPosition.x, this.lastPosition.y)
  } else {
    this.player.play('stop')
  }

  this.lastPosition.x = this.player.x
  this.lastPosition.y = this.player.y
}

window.RemotePlayer = RemotePlayer
