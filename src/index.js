const Preact = require('preact')
const { h, render } = Preact

const Game = require('./Game')
const config = require('../game-config.json')

const App = props => {
  return h(Game, config)
}

render(<App/>, document.querySelector('#karuta-game-app'))
