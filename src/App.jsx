import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GsapScrollTrigger from './components/GsapScrollTrigger'
import Latest from './components/Latest'
import Offers from './components/Offers'
import QuickLinks from './components/QuickLinks'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'


function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <GsapScrollTrigger/>
      <Latest/>
      <Offers/>
      <QuickLinks/>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default App
