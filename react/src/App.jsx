import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import BodyPhone from './components/BodyPhone'
import Sponsors from './components/Sponsors'
import Cards from './components/Cards'
import Sectors from './components/Sectors'
import About from './components/About'
import CEO from './components/CEO'
import Join from './components/Join'
import Link from './components/Link'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <BodyPhone></BodyPhone>
      <Sponsors></Sponsors>
      <Cards></Cards>
      <Sectors></Sectors>
      <About></About>
      <CEO></CEO>
      <Join></Join>
      <Link></Link>
      <Footer></Footer>
    </>
  )
}

export default App
