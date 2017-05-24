const Preact = require('preact')
const { h, render } = Preact

const Game = require('./Game')
const config = require('../game-config.json')

const App = props => {
  return h(Game, config)
}

render(<App/>, document.querySelector('#karuta-game-app'))

// preload to avoid delay?

// const target = document.createElement('div')
// target.style.display = 'none'

// config.cards.map(item => {
//   const { recitation, grab } = item
//   const imgs = [recitation, grab]

//   imgs.forEach(i => {
//     const img = document.createElement('img')
//     img.style.display = 'none'
//     img.src = i

//     target.appendChild(img)
//     target.removeChild(img)
//   })
// })
