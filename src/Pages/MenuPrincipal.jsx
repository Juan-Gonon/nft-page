import { Navigation } from '../components/Navigation'
import { Light } from '../Styles/Thems'
import { GlobalStyles } from '../Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Home } from '../components/Sections/Home'
import { About } from '../components/Sections/About'
import { RoadMap } from '../components/Sections/RoadMap'

export const MenuPrincipal = () => {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light} >
        <Navigation />
        <Home />
        <About />
        <RoadMap />
      </ThemeProvider>

    </main>
  )
}
