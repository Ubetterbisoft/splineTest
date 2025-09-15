import './App.css'
import Spline from '@splinetool/react-spline'
import Hero from './Hero'

function App() {
  return (
    <div className="app">
      {/* Erster Abschnitt mit Spline */}
      <section className="spline-section">
        <Spline className="spline-bg" scene="/scene.splinecode" />
        <div className="overlay">
          <h1>Hello World</h1>
          <p>Welcome to my modern 3D site!</p>
        </div>
      </section>

      {/* Zweiter Abschnitt */}
      <Hero />
    </div>
  )
}

export default App
