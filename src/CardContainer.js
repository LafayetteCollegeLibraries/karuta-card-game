const { h } = require('preact')
const Card = require('./Card')

module.exports = function CardContainer (props) {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
  }

  return (
    <div style={styles.container}>
      {
        props.data.map((data, idx) => (
          <Card
            data={data}
            key={`card-${idx}`}
            onClick={() => props.onCardClick(idx, data)}
            type="grab"
            width={props.cardWidth}
          />
        ))
      }
    </div>
  )
}
