describe('Game', function () {
  var Game = require ('../../src/snakesAndLadders')
  var Game

  beforeEach(function () {
    game = new Game
  })

  describe('#Token can move across the board', function () {
    it('starts the player on square 1', function () {
      game.initialize()
      expect(game.board[0]).toEqual({square: 1, taken: 1})
    })
    it('token is on square 4 after player move', function () {
      game.initialize()
      spyOn(game, 'diceRoll').and.returnValue(3)
      game.move()
      expect(game.board[3]).toEqual({square: 4, taken: 1})
    })
    it('token moves from square 1, to 4, to 8', function () {
      game.initialize()
      spyOn(game, 'diceRoll').and.returnValues(3, 4)
      game.move()
      game.move()
      expect(game.board[7]).toEqual({square: 8, taken: 1})
    })
  })
})
