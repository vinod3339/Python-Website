import { Container, Row, Col } from 'react-bootstrap'
import { courseInfo } from '../data/courseData'

export default function CourseFooter() {
  return (
    <footer className="course-footer">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-1">
              <strong>{courseInfo.code}</strong> — {courseInfo.title}
            </p>
            <p className="mb-0 text-muted">{courseInfo.institution} / {courseInfo.term}</p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <p className="mb-1">
              <a href="mailto:vinodkumar.s@gmrit.edu.in">
                <i className="bi bi-envelope me-1" />
                vinodkumar.s@gmrit.edu.in
              </a>
            </p>
            <p className="mb-0 text-muted">
              Lecture slides and assignments are updated as the course progresses.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
