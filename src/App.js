import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import QuizPage from './pages/QuizPage';
import Header from './components/Header';

export default function App() {
  return (
    <Router basename="/keshah-quiz">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<QuizPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  )
}

