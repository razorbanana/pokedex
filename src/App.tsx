import "./App.css"
import { useEffect } from 'react'
import Body from './components/body/Body'
import Footer from './components/Footer'
import Header from './components/header/Header'
import config from './config/config'
import Discovery from './dev/Discovery'
import ErrorSlider from './components/common/ErrorSlider'
import controller from "./controllers/controller"

function App() {
  useEffect(()=> {
    controller.fetchPokemons()
  }, [])
  if (config.DISCOVERY){
    return (
      <div className="App">
        <Discovery />
      </div>
    )
  }
  return (
    <div className="App">
      <ErrorSlider />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
