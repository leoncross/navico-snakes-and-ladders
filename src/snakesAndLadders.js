function Game () {
  this.board = []
}

Game.prototype.generateBoard = function () {
  for (var i = 1; i < 101; i++) {
    this.board.push({ square: i, taken: 0 })
  }
}

Game.prototype.move = function () {
  return 1
}

module.exports = Game
