const { h } = require('preact')
const Card = require('./Card')
const shuffle = require('lodash.shuffle')

module.exports = function CardContainer (props) {
  const renderCards = () => {
    return shuffle(props.data).map((data, idx) => (
      <Card
        data={data}
        key={`card-${data}`}
        onClick={() => props.onCardClick(data)}
        type="grab"
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
