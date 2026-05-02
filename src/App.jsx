import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

export default App
