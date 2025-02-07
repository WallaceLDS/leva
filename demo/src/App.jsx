import React from 'react'
import { Link, Route } from 'wouter'
import styles from './styles.module.css'

import Minimal from './sandboxes/leva-minimal/src/App'
import PluginSpring from './sandboxes/leva-plugin-spring/src/App'
import Busy from './sandboxes/leva-busy/src/App'
import AdvancedPanels from './sandboxes/leva-advanced-panels/src/App'
import Scroll from './sandboxes/leva-scroll/src/App'
import UI from './sandboxes/leva-ui/src/App'
import Theme from './sandboxes/leva-theme/src/App'
import CustomPlugin from './sandboxes/leva-custom-plugin/src/App'

const links = {
  'leva-minimal': Minimal,
  'leva-plugin-spring': PluginSpring,
  'leva-busy': Busy,
  'leva-advanced-panels': AdvancedPanels,
  'leva-scroll': Scroll,
  'leva-ui': UI,
  'leva-theme': Theme,
  'leva-custom-plugin': CustomPlugin,
}

const Example = ({ link }) => {
  const Component = links[link]
  // David did this and he's ashamed 👇👇👇
  // const Lazy = useMemo(() => React.lazy(() => import(`./sandboxes/${link}/src/App`)), [link])

  return (
    <div>
      <Link href="/">
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.back}>← Back</a>
      </Link>
      <Component />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Route path="/">
        <div className={styles.page}>
          <h1 style={{ marginTop: '20vh' }}>Leva demos</h1>
          <h2>Sandboxes</h2>
          <div className={styles.linkList}>
            {Object.keys(links).map((link) => (
              <Link key={link} href={`/${link}`}>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.link}>{link}</a>
              </Link>
            ))}
          </div>
        </div>
      </Route>
      <Route path="/:link">{(params) => <Example link={params.link} />}</Route>
    </>
  )
}
