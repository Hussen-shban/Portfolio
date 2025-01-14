import About from "./component/About"
import Connect from "./component/Connect"
import Hero from "./component/Hero"
import Light from "./component/light"
import Navbar from "./component/Navbar"
import Project from "./component/Project"
import Skills from "./component/Skills"


function App() {

  return (
    <main className="screen-max-width w-[100vw] overflow-x-hidden relative " >
      {/* <Light /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Connect />


    </main>
  )
}

export default App
