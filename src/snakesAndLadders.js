function Game () {
  this.board = []
}

Game.prototype.initialize = function () {
  this.generateBoard()
  this.board[0]['taken'] = 1
}

Game.prototype.generateBoard = function () {
  for (var i = 1; i < 101; i++) {
    this.board.push({ square: i, taken: 0 })
  }
}

Game.prototype.move = function (count) {
  return 1
}

module.exports = Game
