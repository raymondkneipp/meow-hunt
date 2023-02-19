const generateGameGrid = () => {
  var treasureLocation
  var bombLocation = Math.floor(Math.random() * 9)

  do {
    treasureLocation = Math.floor(Math.random() * 9) // generates a random integer between 0 and 9
  } while (treasureLocation === bombLocation) // repeat the loop until num2 is different from num1

  var grid = new Array(16).fill('')

  grid[bombLocation] = '💩'

  grid[treasureLocation] = '🍃'

  return grid
}

var lives = 9
var grid = generateGameGrid()
var gameOver = false

const updateLives = () => {
  const element = document.getElementById('lives')
  element.innerHTML = lives

  if (lives <= 5) {
    element.classList.add('low-life')
  } else {
    element.classList.remove('low-life')
  }

  if (lives === 0) {
    gameOver = true
    alert('You ran out of lives!')
  }
}

const catnipFinder = (index) => {
  if (gameOver) {
    return
  }

  const element = document.getElementById(index)

  if (grid[index] === '') {
    lives -= 1
  }

  if (grid[index] === '💩') {
    alert('You Lose!')
    gameOver = true
    lives -= 1
  }

  if (grid[index] === '🍃') {
    gameOver = true
    alert('You Win!')
  }

  updateLives()

  element.innerHTML = grid[index]
  element.classList.add('dug')
}

updateLives()

const resetGame = () => {
  for (var i = 0; i < 16; i++) {
    const element = document.getElementById(i)
    element.innerHTML = '🐾'
    element.classList.remove('dug')
  }

  lives = 9

  updateLives()

  gameOver = false

  grid = generateGameGrid()
}
