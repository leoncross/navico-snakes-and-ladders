function Game () {
  this.board = []
}

Game.prototype.initialize = function () {
  this.generateBoard()
  this.board[0]['taken'] = 1
}

Game.prototype.generateBoard = function () {
  for (var i = 0; i < 100; i++) {
    this.board.push({ square: i + 1, taken: 0 })
  }
}

Game.prototype.move = function (count) {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board[i]['taken'] === 1) return this.moveProcess(i, count)
  }
}

Game.prototype.moveProcess = function (index, count) {
  this.board[index]['taken'] = 0
  this.board[index + count] = { square: index + count + 1, taken: 1 }
}

Game.prototype.diceRoll = function () {
  return Math.floor((Math.random() * 6) + 1)
}

module.exports = Game
