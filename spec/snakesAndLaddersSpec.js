describe('Game', function () {
  var Game = require ('../src/snakesAndLadders')
  var Game

  beforeEach(function () {
    game = new Game
  })

  describe('#generateBoard', function () {
    it('creates a 10x10 board', function () {
      game.generateBoard()
      expect(game.board.length).toEqual(100)
    })
  })
  describe('#initialize', function () {
    it('starts the game', function () {
      game.initialize()
      expect(game.board[0]).toEqual({square: 1, taken: 1})
    })
  })
  describe('#move', function () {
    it('moves the player 1 place', function () {
      game.initialize()
      expect(game.board[0]).toEqual({square: 1, taken: 1})
      game.move(1)
      expect(game.board[1]).toEqual({square: 2, taken: 1})
    })
  })
})
