import './App.css'
import Header from './components/Header/Header'
import Risks from './components/Risks/Risks'
import Risons from './components/Risons/Risons'
import Footer from './components/Footer/Footer'
import Stages from './components/Stages/Stages'
import OneTimeCarInspection from './components/OneTimeCarInspection/OneTimeCarInspection'
import AboutMe from './components/AboutMe/AboutMe'
import OnTheMap from './components/OnTheMap/OnTheMap'
import PhotoCarousel from './components/PhotoСarousel/PhotoCarousel'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <Risks />
      <Risons />
      <Stages />
      <OneTimeCarInspection />
      <PhotoCarousel />
      <OnTheMap />
      <Footer /> 
    </>
  )
}

export default App
