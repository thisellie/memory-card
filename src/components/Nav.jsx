import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav>
      <div>
        {/* TODO: Add github link */}
        <h2>thisellie's Memory Card</h2>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
      <div>
        <p>Score: 0</p>
        <p>Top Score: 0</p>
        {/* TODO: Add theme changer */}
      </div>
    </nav>
  )
}