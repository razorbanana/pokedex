import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/header/Header'
import config from './config/config'
import Discovery from './dev/Discovery'

function App() {
  console.log(config.DISCOVERY)
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
