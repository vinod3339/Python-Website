import { Container } from 'react-bootstrap'
import ScheduleTable from '../components/ScheduleTable'

export default function Schedule() {
  return (
    <>
      <section className="course-hero" style={{ padding: '2rem 0' }}>
        <Container>
          <h1>Course Schedule</h1>
          <p className="lead mb-0">
            Updated lecture slides will be posted here shortly before each lecture.
            Lecture notes will be uploaded a few days after most lectures.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="mb-4">
            <span className="material-link me-2">[slides]</span>
            <span className="material-link me-2">[notes]</span>
            <span className="material-link assignment me-2">[colab]</span>
            <span className="deadline-badge me-2">Deadline</span>
            <span className="event-badge">Event / Session</span>
          </div>
          <ScheduleTable />
        </Container>
      </section>
    </>
  )
}
