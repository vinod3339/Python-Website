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
            <span className="material-link me-2"><a href="/materials/Slides/Topic-17.pptx" target="_blank">Topic 17 Slides</a></span>
            <span className="material-link me-2"><a href="/materials/Slides/Topic-18.pptx" target="_blank">Topic 18 Slides</a></span>
            <span className="material-link me-2"><a href="/materials/Slides/Topic-19.pptx" target="_blank">Topic 19 Slides</a></span>
            <span className="material-link me-2"><a href="/materials/Slides/Topic-20.pptx" target="_blank">Topic 20 Slides</a></span>
            <span className="material-link me-2">[notes]</span>
          </div>
          <ScheduleTable />
        </Container>
      </section>
    </>
  )
}
