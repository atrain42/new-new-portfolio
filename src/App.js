import './App.css'

import Navbar from './components/Navbar'
import Header from './layout/Header'
import About from './layout/about/About'
import RecentProject from './layout/RecentProject'
import Writing from './layout/writing/Writing'
import Goals from './layout/goals/Goals'
import Footer from './layout/footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <RecentProject />
      <Writing />
      <Goals />
      <Footer />
    </div>
  )
}

export default App;
