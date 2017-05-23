const Preact = require('preact')
const { h, render } = Preact

const Game = require('./Game')

const App = props => {
  return (
    <Game
      cards={['e', 'hi', 'i', 'ri', 'wo', 'yo']}
    />
  )
}

render(<App/>, document.querySelector('#karuta-game-app'))
