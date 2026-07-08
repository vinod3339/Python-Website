import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { courseInfo } from '../data/courseData'

export default function Home() {
  return (
    <>
      <section className="course-hero">
        <Container>
          <span className="term-badge">{courseInfo.institution} / {courseInfo.term}</span>
          <h1 className="mt-3">
            {courseInfo.code}: {courseInfo.title}
          </h1>
          <p className="lead mb-0" style={{ maxWidth: '700px' }}>
            {courseInfo.description}
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <blockquote className="course-quote">
            &ldquo;{courseInfo.quote.text}&rdquo;
            <footer className="mt-2 text-muted">— {courseInfo.quote.attribution}</footer>
          </blockquote>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <h2 className="section-title">Course Staff</h2>
          <Row className="g-4 mb-4">
            {courseInfo.instructors.map((person) => (
              <Col md={4} key={person.name}>
                <div className="staff-card">
                  <div className="role">Instructor</div>
                  <h5 className="mt-1 mb-1">{person.name}</h5>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <h2 className="section-title">Logistics</h2>
          <Row>
            <Col lg={8}>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong><i className="bi bi-camera-video me-2" />Lectures:</strong>{' '}
                  {courseInfo.logistics.lectures}
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-clock me-2" />Office Hours:</strong>{' '}
                  {courseInfo.logistics.officeHours}
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-play-circle me-2" />Videos:</strong>{' '}
                  {courseInfo.logistics.videos}
                </li>
                <li className="mb-3">
                  <strong><i className="bi bi-chat-dots me-2" />Contact:</strong>{' '}
                  {courseInfo.logistics.contact}
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <div className="info-sidebar">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link to="/schedule">Full Schedule</Link></li>
                  <li><Link to="/slides">Lecture Slides</Link></li>
                  <li><Link to="/assignments">Assignments</Link></li>
                  <li><Link to="/info">Course Info & Policies</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <h2 className="section-title">What is this course about?</h2>
          <p>
            Python has become the language of choice for beginners and professionals alike.
            From web development and data science to automation and machine learning, Python
            powers applications across virtually every domain of computing.
          </p>
          <p>
            In this course, you will progress from writing your first &ldquo;Hello, World!&rdquo;
            program to building complete applications. Through lectures, hands-on programming
            assignments, and a final capstone project, you will develop the skills to design,
            implement, and debug Python programs confidently.
          </p>
          <p>
            Updated lecture slides and assignments will be posted on this website shortly
            before each lecture. We are happy for anyone to use these resources.
          </p>
        </Container>
      </section>
    </>
  )
}
