import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <Router basename="/keshah-quiz">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<QuizPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  )
}

