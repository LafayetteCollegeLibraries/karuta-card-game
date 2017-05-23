const { h, Component } = require('preact')
const shuffle = require('lodash.shuffle')

const Card = require('./Card')
const CardContainer = require('./CardContainer')

module.exports = class Game extends Component {
  constructor (props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)
    this.restartGame = this.restartGame.bind(this)

    this.state = {}
  }

  componentDidMount () {
    this.restartGame()
  }

  handleCardClick (idx) {
    if (idx === this.state.answerIdx) {
      alert('You matched! Great job!')
      this.restartGame()
    }

    else {
      alert('Try again!')
    }
  }

  restartGame () {
    const shuffled = this.shuffle(this.props.cards)
      .slice(0, this.props.numberOfCards || 6)

    this.setState({
      cards: shuffled,
      answerIdx: Math.floor(Math.random() * shuffled.length),
    })
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
    if (this.state.cards === undefined) {
      return null
    }

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

    const { cards, answerIdx } = this.state

    return (
      <div style={style.container}>
        <Card
          data={cards[answerIdx]}
          width={cardWidth}
          style={style.recitation}
          type="recitation"
        />

        <CardContainer
          cardWidth={cardWidth}
          data={cards}
          onCardClick={this.handleCardClick}
        />
      </div>
    )
  }
}
