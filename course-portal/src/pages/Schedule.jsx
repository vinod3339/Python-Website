import { Container } from 'react-bootstrap'
import ScheduleTable from '../components/ScheduleTable'
import { materials } from '../data/courseData'

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
            <span className="material-link me-2"><a href={materials.itertools.url} target="_blank" rel="noopener noreferrer" download={materials.itertools.filename}>Topic 21 Slides</a></span>
            <span className="material-link me-2"><a href={materials.modulesAndPackages.url} target="_blank" rel="noopener noreferrer" download={materials.modulesAndPackages.filename}>Topic 22 Slides</a></span>
            <span className="material-link me-2"><a href={materials.pythonPackages.url} target="_blank" rel="noopener noreferrer" download={materials.pythonPackages.filename}>Topic 23 Slides</a></span>
            <span className="material-link me-2"><a href={materials.numpyAndPandas.url} target="_blank" rel="noopener noreferrer" download={materials.numpyAndPandas.filename}>Topic 24 Slides</a></span>
            <span className="material-link me-2"><a href={materials.pandas.url} target="_blank" rel="noopener noreferrer" download={materials.pandas.filename}>Topic 25 Slides</a></span>
            <span className="material-link me-2">[notes]</span>
          </div>
          <ScheduleTable />
        </Container>
      </section>
    </>
  )
}
