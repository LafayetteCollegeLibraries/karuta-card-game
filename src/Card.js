const { h } = require('preact')

module.exports = function Card (props) {
  const width = props.width || 250

  // const borderColor = '#3a3a6d'
  const borderColor = '#65001c'
  const cardBackgroundColor = 'papayawhip'

  const styles = {
    container: {
      alignItems: 'center',
      backgroundColor: cardBackgroundColor,
      border: `${width * .04}px solid ${borderColor}`,
      borderRadius: '5px',
      boxShadow: '0 2px 4px 0 #999',
      display: 'inline-flex',
      height: `${width * 1.4}px`,
      justifyContent: 'center',
      margin: '10px',
      position: 'relative',
      width: `${width}px`,
    },

    data: {
      color: borderColor,
      fontSize: '2.25rem',
    }
  }

  return (
    <div className="card" onClick={props.onClick} style={styles.container}>
      <span style={styles.data}>{props.data}</span>
    </div>
  )
}
