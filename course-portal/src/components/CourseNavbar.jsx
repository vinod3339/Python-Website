import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { courseInfo } from '../data/courseData'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/schedule', label: 'Schedule' },
  { to: '/slides', label: 'Lecture Slides' },
  { to: '/assignments', label: 'Assignments' },
  { to: '/info', label: 'Course Info' },
]

export default function CourseNavbar() {
  return (
    <Navbar expand="lg" className="course-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          {courseInfo.code}: {courseInfo.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="course-nav" />
        <Navbar.Collapse id="course-nav">
          <Nav className="ms-auto">
            {navItems.map(({ to, label, end }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
