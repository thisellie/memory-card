import PropTypes from 'prop-types'
import '../styles/Nav.css';

export default function Nav({ score, topScore }) {
  return (
    <nav>
      <div>
        {/* TODO: Add github link */}
        <h2>thisellie&apos;s Memory Card</h2>
        <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
        {/* TODO: Add theme changer */}
      </div>
    </nav>
  )
}

Nav.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
}