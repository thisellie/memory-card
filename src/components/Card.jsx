import PropTypes from 'prop-types'
import '../styles/Card.css'

export default function Card({ card }) {
  function handleClick() {
    console.log(`You clicked on ${card.name} by ${card.artist}`)
  }
  
  return (
    <div className="card" key={card.id} onClick={handleClick}>
      <img alt="card" src={card.image} />
      <div className="card-details">
        <h3>{card.name}</h3>
        <p>by {card.artist}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired, 
}