import NavBar from './components/navBar'
import HOME from './components/home'
import Footer from './components/footer'

function App() {

  return (
    <div  className="d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main content */}
      <div className="flex-grow-1">
        <HOME />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App