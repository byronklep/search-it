import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ImagePage from './pages/ImagePage'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/image" component={ImagePage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/" component={HomePage} exact />
      <Footer />
    </Router>
  )
}

export default App
