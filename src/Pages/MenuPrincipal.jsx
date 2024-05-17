import { Navigation } from '../components/Navigation'
import { Light } from '../Styles/Thems'
import { GlobalStyles } from '../Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export const MenuPrincipal = () => {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light} >
        <Navigation />
      </ThemeProvider>
    </main>
  )
}
