const Preact = require('preact')
const { h, render } = Preact

const Game = require('./Game')

const App = props => {
  return (
    <div>
      <Game
        cards={['cat', 'dog', 'mouse', 'frog', 'bird', 'shark']}
      />
    </div>
  )
}

render(<App/>, document.querySelector('#app'))
