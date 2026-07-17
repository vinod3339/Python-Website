import { Container, Row, Col, Table } from 'react-bootstrap'
import { courseInfo } from '../data/courseData'

export default function CourseInfo() {
  return (
    <>
      <section className="course-hero" style={{ padding: '2rem 0' }}>
        <Container>
          <h1>Course Information</h1>
          <p className="lead mb-0">
            Prerequisites, grading breakdown, policies, and recommended readings.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            <Col lg={8}>
              <h2 className="section-title">Prerequisites</h2>
              <ul>
                {courseInfo.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <h2 className="section-title mt-5">Grading</h2>
              <Table bordered className="mb-4" style={{ maxWidth: '500px' }}>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {courseInfo.grading.map((g) => (
                    <tr key={g.component}>
                      <td>{g.component}</td>
                      <td><strong>{g.weight}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              
            </Col>

            <Col lg={4}>
              <div className="info-sidebar mb-4">
                <h5>Reference Texts</h5>
                <p className="small text-muted">None required — all available free online.</p>
                <ul className="ps-3">
                  {courseInfo.textbooks.map((book) => (
                    <li key={book.title} className="mb-2">
                      <strong>{book.title}</strong>
                      <br />
                      <span className="text-muted">{book.author}</span>
                      <br />
                      <small className="text-muted">{book.note}</small>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-sidebar">
                <h5>Coursework Overview</h5>
                <ul>
                  <li>7 programming assignments (PAs 0–4 + project)</li>
                  <li>Weekly quizzes on Gradescope</li>
                  <li>One in-class midterm exam</li>
                  <li>Final capstone project with demo day</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <h2 className="section-title">Course Content Overview</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="staff-card">
                <h5><i className="bi bi-1-circle me-2 text-danger" />Weeks 1–2</h5>
                <p className="mb-0 text-muted">
                  Python fundamentals: variables, control flow, functions, and basic I/O.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="staff-card">
                <h5><i className="bi bi-2-circle me-2 text-danger" />Weeks 3–5</h5>
                <p className="mb-0 text-muted">
                  Data structures, OOP, error handling, modules, and testing.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="staff-card">
                <h5><i className="bi bi-3-circle me-2 text-danger" />Weeks 6–8</h5>
                <p className="mb-0 text-muted">
                  NumPy, Pandas, visualization, APIs, Flask, and final project.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
