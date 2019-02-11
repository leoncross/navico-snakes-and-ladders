[![Coverage Status](https://coveralls.io/repos/github/leoncross/navico-snakes-and-ladders/badge.svg?branch=master)](https://coveralls.io/github/leoncross/navico-snakes-and-ladders?branch=master)
# navico-snakes-and-ladders
Tech test for Navico, following feature 1 from http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

# How to run tests:

- to run Jasmine:
```
npm run jasmine
```
- to check code coverage:
```
npm run coverage
```
- to check code quality with Eslint:
```
npm run lint
```

# How did you approach the problem?
I approached the problem following strict TDD guidelines, and following a red green refactor process.

I approached each user story on an individual bases with the minimal amount of code

# How did you make key design decisions and what alternatives did you consider?
I played around quite a bit with whether it was necessary to actually generate the board (all 100 pieces), and instead just simply store the players position as an integer, similar to the below:

```
this.player = 1
this.move() // 5
this.player = 5
```
However, I felt this could be argued as bypassing quite a few necessary features, so I wanted to showcase that I knew how to complete the kata, and potentially move onto the next stage of this. Because of this, I initialised all 100 pieces of the board with a for loop.

# How do you envision your solution evolving in the future?

The key thing that I was unable to complete within the hour timeframe was the WinCondition functionality. This calculation would take place by calling a function within move; similar to the below:

```
Game.prototype.move = function () {
  var count = this.diceRoll()
  for (var i = 0; i < this.board.length; i++) {
    if (this.winCondition(i, count)) return 'game won'
    if (this.overMoveProcess(i, count)) return
    if (this.board[i]['taken'] === 1) return this.moveProcess(i, count)
  }
}

```
- winCondition function would see if a player reached 100 exactly
- overMoveProcess would move the player to 100, then back to 98 (for example)

Finally, given more time, I would extract this single class into 3 separate classes:
1. Game - controller class; handling instructions from the front end, such as move/win/loss etc.
2. Dice - handling rolling functionality
3. ErrorHandling - to handle the raising of errors, such as if player1 tried to move twice
