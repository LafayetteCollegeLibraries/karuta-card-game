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
      cards: this.shuffle(prev.cards),
      answer: prev.cards[Math.floor(Math.random() * prev.cards.length)],
    }))
  }

  shuffle (input) {
    const areEqual = (a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
          return true
        }

        return false
      }
    }

    let output

    do {
      output = shuffle(input)
    } while (areEqual(input, output))

    return output
  }

  render () {
    const cardWidth = this.props.cardWidth || 150

    const style = {
      container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },

      recitation: {
        display: 'block',
        marginBottom: '50px',
      },
    }

    return (
      <div style={style.container}>
        <Card
          data={this.state.answer}
          width={cardWidth}
          style={style.recitation}
          type="recitation"
        />

        <CardContainer
          cardWidth={cardWidth}
          data={this.state.cards}
          onCardClick={this.handleCardClick}
        />
      </div>
    )
  }
}
