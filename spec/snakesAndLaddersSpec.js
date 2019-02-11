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

  describe('#move', function () {
    it('moves 1', function () {
      expect(game.move()).toEqual(1)
    })
  })
})
