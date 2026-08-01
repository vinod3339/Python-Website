import { Container, Row, Col } from 'react-bootstrap'
import { lectures } from '../data/courseData'

export default function Slides() {
  const weeks = [...new Set(lectures.map((l) => l.week))]

  return (
    <>
      <section className="course-hero" style={{ padding: '2rem 0' }}>
        <Container>
          <h1>Lecture Slides</h1>
          <p className="lead mb-0">
            Slides are posted before each lecture. PDF and PowerPoint formats are available.
            Lecture notes and video recordings are linked where available.
          </p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          {weeks.map((week) => (
            <div key={week} className="mb-5">
              <h3 className="section-title">Week {week}</h3>
              <Row className="g-4">
                {lectures
                  .filter((l) => l.week === week)
                  .map((lecture) => (
                    <Col md={6} key={lecture.date + lecture.title}>
                      <div className="slide-card">
                        <div className="slide-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <span>{lecture.date}</span>
                            
                          </div>
                        </div>
                        <div className="slide-body">
                          <h5 className="mb-3">{lecture.title}</h5>
                          <div className="mb-2">
                            <strong className="text-muted small">Slides:</strong>
                            <div className="mt-1">
                              {lecture.slides.map((s) => {
                                const isValidUrl = s.url && s.url !== '#'
                                const isDownloadable =
                                  isValidUrl && (s.download || s.format === 'pptx' || s.format === 'pdf')
                                return isValidUrl ? (
                                  <a
                                    key={s.label}
                                    href={s.url}
                                    className="material-link"
                                    {...(isDownloadable ? { download: s.download || s.label } : {})}
                                  >
                                    <i
                                      className={`bi bi-${
                                        s.format === 'pdf'
                                          ? 'file-pdf'
                                          : s.format === 'colab'
                                            ? 'cloud'
                                            : 'file-slides'
                                      } me-1`}
                                    />
                                    {s.label}
                                    {isDownloadable && (
                                      <i className="bi bi-download ms-1" title="Download" />
                                    )}
                                  </a>
                                ) : (
                                  <span key={s.label} className="material-link disabled" title="Coming soon">
                                    <i
                                      className={`bi bi-${
                                        s.format === 'pdf'
                                          ? 'file-pdf'
                                          : s.format === 'colab'
                                            ? 'cloud'
                                            : 'file-slides'
                                      } me-1`}
                                    />
                                    {s.label}
                                    <i className="bi bi-lock ms-1" title="Coming soon" />
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                          {lecture.notes.length > 0 && (
                            <div>
                              <strong className="text-muted small">Notes:</strong>
                              <div className="mt-1">
                                {lecture.notes.map((n) => {
                                const isValidUrl = n.url && n.url !== '#'
                                return isValidUrl ? (
                                  <a key={n.label} href={n.url} className="material-link">
                                    <i className="bi bi-journal-text me-1" />
                                    {n.label}
                                  </a>
                                ) : (
                                  <span key={n.label} className="material-link disabled" title="Coming soon">
                                    <i className="bi bi-journal-text me-1" />
                                    {n.label}
                                    <i className="bi bi-lock ms-1" title="Coming soon" />
                                  </span>
                                )
                              })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
