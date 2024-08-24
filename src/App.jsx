import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Nosotros from './components/pages/Nosotros'
import Error404 from './components/pages/Error404'

function App() {
  

  return (
    <>
      <Menu/>
      {/*<Inicio></Inicio>*/}
      {/*<Nosotros/>*/}
      <Error404 />
      <Footer />
    </>
  )
}

export default App
