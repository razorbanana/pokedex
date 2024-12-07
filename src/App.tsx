import { useEffect } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/header/Header'
import config from './config/config'
import Discovery from './dev/Discovery'
import model from './models/model'

function App() {
  useEffect(()=> {
    model.fetchPokemonList()
  }, [])
  if (config.DISCOVERY){
    return (<Discovery />)
  }
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
