import Logo from 'Components/Logo'
import Link from 'Components/Link'

import 'Scss/app.scss'

/**
 * Root component, the only view as of now
 *
 * @returns {JSX}
 */
const App = () => (
  <main className="app">
    <Logo />
    <div className="app__link-bar">
      <Link href="http://eightnine.co/mueller/" target="_blank" className="app__link">
        joseph mueller
      </Link>
      <span className="app__link-divider">+</span>
      <Link href="http://eightnine.co/smith/" target="_blank" className="app__link">
        michael smith
      </Link>
    </div>
  </main>
)

export default App
