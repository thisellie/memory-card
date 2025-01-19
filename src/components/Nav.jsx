import PropTypes from 'prop-types'
import '../styles/Nav.css';

export default function Nav({ score, topScore }) {
  return (
    <nav>
      <div>
        <h2>thisellie&apos;s <a href="https://github.com/thisellie/memory-card" target='_blank'>Memory Card</a> 🎵🎴</h2>
        <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
        <span>Score: {score}</span>
        <span>Top Score: {topScore}</span>
      </div>
      <div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
}