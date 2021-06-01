import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Footer />
    </Router>
  )
}

export default App
