import './App.css'

import Navbar from './components/Navbar'
import Header from './layout/Header'
import About from './layout/About'
import RecentProject from './layout/RecentProject'
import HeroSections from './layout/HeroSections'
import Footer from './layout/footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <RecentProject />
      <HeroSections />
      <Footer />
    </div>
  )
}

export default App;
