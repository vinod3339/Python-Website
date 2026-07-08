import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CourseNavbar from './components/CourseNavbar'
import CourseFooter from './components/CourseFooter'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Slides from './pages/Slides'
import Assignments from './pages/Assignments'
import CourseInfo from './pages/CourseInfo'

export default function App() {
  return (
    <BrowserRouter>
      <CourseNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/info" element={<CourseInfo />} />
        </Routes>
      </main>
      <CourseFooter />
    </BrowserRouter>
  )
}
