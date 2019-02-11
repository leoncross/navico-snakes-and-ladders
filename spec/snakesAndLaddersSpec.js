describe('Game', function () {
  var Game = require ('../src/snakesAndLadders')
  var Game

  beforeEach(function () {
    game = new Game
  })

  describe('#move', function() {
    it('moves 1', function () {
      expect(game.move()).toEqual(1)
    })
  })
})
