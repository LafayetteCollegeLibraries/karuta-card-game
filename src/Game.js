const { h, Component } = require('preact')
const shuffle = require('lodash.shuffle')

const Card = require('./Card')
const CardContainer = require('./CardContainer')

module.exports = class Game extends Component {
  constructor (props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)
    this.restartGame = this.restartGame.bind(this)

    this.state = {
      cards: props.cards || []
    }

    this.restartGame()
  }

  handleCardClick (data) {
    if (data === this.state.answer) {
      alert('You matched! Great job!')
      this.restartGame()
    }

    else {
      alert('Try again!')
    }
  }

  restartGame () {
    this.setState(prev => ({
      cards: shuffle(prev.cards),
      answer: prev.cards[Math.floor(Math.random() * prev.cards.length)],
    }))
  }

  render () {
    const cardWidth = this.props.cardWidth || 150

    return (
      <div>
        <div key="target-card">
          <Card
            data={this.state.answer}
            width={cardWidth}
          />
        </div>

        <CardContainer
          cardWidth={cardWidth}
          data={this.state.cards}
          onCardClick={this.handleCardClick}
        />
      </div>
    )
  }
}
