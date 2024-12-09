import "./App.css"
import { useEffect } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/header/Header'
import config from './config/config'
import Discovery from './dev/Discovery'
import model from './models/model'
import ErrorSlider from './components/errorSlider/ErrorSlider'

function App() {
  useEffect(()=> {
    model.fetchPokemonList()
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
