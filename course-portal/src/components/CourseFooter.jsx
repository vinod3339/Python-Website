import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { courseInfo } from '../data/courseData'

export default function CourseFooter() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const storedCount = Number(localStorage.getItem('courseFooterVisitorCount') || 0)
    const nextCount = storedCount + 1
    localStorage.setItem('courseFooterVisitorCount', String(nextCount))
    setVisitorCount(nextCount)
  }, [])

  return (
    <footer className="course-footer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-1">
              <strong>{courseInfo.code}</strong> — {courseInfo.title}
            </p>
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{courseInfo.institution} / {courseInfo.term}</p>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <p className="mb-1">
              <a href="mailto:vinodkumar.s@gmrit.edu.in" style={{ color: 'white' }}>
                <i className="bi bi-envelope me-1" />
                vinodkumar.s@gmrit.edu.in
              </a>
            </p>
            <p className="mb-0">
              <span
                className="d-inline-block px-3 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: 'white',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  minWidth: '3rem',
                  textAlign: 'center',
                }}
              >
                {visitorCount.toLocaleString()}
              </span>
            </p>
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Lecture slides and assignments are updated as the course progresses.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
