import React from 'react'
import AdvanceNavbar from './components/AdvanceNavbar'
import ProfilePage from './components/Home'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Roadmap from './components/RoadMap'
import GridLayoutWrapper from './components/layoutWrapper/LayoutWrapper'
import SkillSection from './components/Skills'

function App() {
  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        toastStyle={{
          width: "250px",     // custom width
          height: "60px",     // custom height
          fontSize: "12px",
          padding: "0px 20px"
        }}
        draggable
        pauseOnHover
      // theme="colored"
      />

      <AdvanceNavbar />
      <GridLayoutWrapper dot={true}>
        <ProfilePage />
      </GridLayoutWrapper>
      <GridLayoutWrapper>
        <About />
      </GridLayoutWrapper>
      <GridLayoutWrapper dot={true}>
        <SkillSection />
      </GridLayoutWrapper>

      <GridLayoutWrapper dot={true}>
        <Experience />
      </GridLayoutWrapper>
      <GridLayoutWrapper dot={true}>
        <Projects />
      </GridLayoutWrapper>
      <GridLayoutWrapper dot={true}>
        <Roadmap />
      </GridLayoutWrapper>
      <GridLayoutWrapper dot={true}>
        <Footer />
      </GridLayoutWrapper>
    </div>
  )
}

export default App
