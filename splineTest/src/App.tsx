import './App.css'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="app">
      {/* Fullscreen Section with spline */}
      <section className="spline-section">
        <Spline className="spline-bg" scene="/scene.splinecode" />
        <div className="overlay">
          <h1>This is part of <br />
          Dejans Portfolio</h1>
          
          <p>3D-Models provided by Spline and <br></br>various other creators</p>
        </div>
      </section>

      {/* Hero Section with smaller spline window */}
      <div className="heroSection">
        <div>
          <h1>Welcome to My 3D Site</h1> 
          <p>Experience the future of web design with stunning 3D graphics.</p>
        </div>
        
        {/* Small spline window */}
        <div className="chatty">
          <Spline scene="/chattyWhite.splinecode" />
        </div>
      </div>
    </div>
  )
}

export default App
