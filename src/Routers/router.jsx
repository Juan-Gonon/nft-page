import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MenuPrincipal } from '../Pages/MenuPrincipal'

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuPrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}

