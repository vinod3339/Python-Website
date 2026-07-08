import { Container, Row, Col, Badge } from 'react-bootstrap'
import { assignments } from '../data/courseData'

export default function Assignments() {
  return (
    <>
      <section className="course-hero" style={{ padding: '2rem 0' }}>
        <Container>
          <h1>Programming Assignments</h1>
          <p className="lead mb-0">
            There are 7 programming assignments and one final project. All assignments
            are due Fridays at 5:00 PM unless otherwise noted. Starter code and
            handouts are provided for each assignment.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="info-sidebar mb-4">
            <h5><i className="bi bi-info-circle me-2" />Submission & Collaboration Policy</h5>
            <p className="mb-0">
              Submit assignments via Gradescope. You may discuss problems with classmates,
              but all submitted code must be your own. Late submissions lose 10% per day
              (max 3 days). See <a href="/info">Course Info</a> for full policies.
            </p>
          </div>

          {assignments.map((pa) => (
            <div key={pa.id} className="assignment-card">
              <Row>
                <Col md={8}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="pa-number">
                      {typeof pa.number === 'number' ? `PA ${pa.number}` : pa.number}
                    </span>
                    <Badge bg="secondary">{pa.points} pts</Badge>
                  </div>
                  <h4 className="mb-2">{pa.title}</h4>
                  <p className="text-muted mb-2">{pa.description}</p>
                  <div className="mb-2">
                    {pa.topics.map((topic) => (
                      <Badge key={topic} bg="light" text="dark" className="me-1 mb-1">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </Col>
                <Col md={4} className="text-md-end">
                  <div className="mb-2">
                    <small className="text-muted d-block">Released</small>
                    <strong>{pa.released}</strong>
                  </div>
                  <div className="mb-3">
                    <small className="text-muted d-block">Due Date</small>
                    <span className="due-date">{pa.dueDate}</span>
                  </div>
                  <div>
                    {pa.resources.map((r) => (
                      <a
                        key={r.label}
                        href={r.url}
                        className="material-link d-inline-block mb-1"
                      >
                        <i className={`bi bi-${r.icon} me-1`} />
                        {r.label}
                      </a>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
