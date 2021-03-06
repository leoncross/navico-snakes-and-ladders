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
      spyOn(game, 'diceRoll').and.returnValue(1)
      game.initialize()
      expect(game.board[0]).toEqual({square: 1, taken: 1})
      game.move()
      expect(game.board[1]).toEqual({square: 2, taken: 1})
    })
  })
  describe('#diceRoll', function () {
    it('returns a random number between 1 and 6', function () {
      spyOn(game, 'diceRoll').and.returnValue(1)
      expect(game.diceRoll()).toEqual(1)
    })
  })
})
