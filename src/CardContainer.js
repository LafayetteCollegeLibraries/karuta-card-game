const { h } = require('preact')
const Card = require('./Card')
const shuffle = require('lodash.shuffle')

const fillArray = num => {
  const out = Array(num)
  for (let i = 1; i <= out.length; i++) {
    out[i - 1] = i
  }
  return out
}

const getShuffledArray = num => shuffle(fillArray(num))

module.exports = function CardContainer (props) {
  const renderCards = () => {
    return shuffle(props.data).map((data, idx) => (
      <Card
        data={data}
        key={`card-${idx}`}
        onClick={() => props.onCardClick(data)}
        width={props.cardWidth}
      />
    ))
  }

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
  }

  return (
    <div style={styles.container}>
      {renderCards()}
    </div>
  )
}
