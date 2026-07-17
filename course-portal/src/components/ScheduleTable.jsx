import { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { schedule } from '../data/courseData'

function MaterialLinks({ materials }) {
  if (!materials?.length) return null
  return (
    <>
      {materials.map((m) => {
        const isDownloadable = m.download || m.type === 'ppt'
        return (
          <a
            key={m.label}
            href={m.url}
            className={`material-link${m.type === 'colab' ? ' assignment' : ''}`}
            {...(isDownloadable && m.url !== '#'
              ? { download: m.download || `${m.label}.pptx` }
              : {})}
          >
            [{m.label}]
            {isDownloadable && m.url !== '#' && (
              <i className="bi bi-download ms-1" title="Download" />
            )}
          </a>
        )
      })}
    </>
  )
}

function DeadlineBadges({ deadlines }) {
  if (!deadlines?.length) return null
  return (
    <>
      {deadlines.map((d) => (
        <span key={d.label} className="deadline-badge d-block mb-1">
          {d.label}
        </span>
      ))}
    </>
  )
}

function EventBadges({ events }) {
  if (!events?.length) return null
  return (
    <>
      {events.map((e) => (
        <span key={e.label} className="event-badge d-block mb-1">
          <i className="bi bi-calendar-event me-1" />
          {e.label}
        </span>
      ))}
    </>
  )
}

export default function ScheduleTable() {
  return (
    <div className="table-responsive">
      <Table className="schedule-table" bordered hover>
        <thead>
          <tr>
            <th style={{ width: '12%' }}>Date</th>
            <th style={{ width: '35%' }}>Description</th>
            <th style={{ width: '25%' }}>Course Materials</th>
            <th style={{ width: '15%' }}>Events</th>
            <th style={{ width: '13%' }}>Deadlines</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => {
            if (item.entries) {
              return (
                <Fragment key={`week-${item.week ?? index}`}>
                  <tr className="week-header">
                    <td colSpan={5}>Week {item.week}</td>
                  </tr>
                  {item.category && (
                    <tr key={`cat-${item.week ?? index}`} className="category-header">
                      <td colSpan={5}>{item.category}</td>
                    </tr>
                  )}
                  {item.entries.map((entry) => (
                    <tr key={`${item.week}-${entry.date}`}>
                      <td>{entry.date}</td>
                      <td>{entry.description}</td>
                      <td>
                        <MaterialLinks materials={entry.materials} />
                      </td>
                      <td>
                        <EventBadges events={entry.events} />
                      </td>
                      <td>
                        <DeadlineBadges deadlines={entry.deadlines} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              )
            }

            return (
              <tr key={`entry-${index}-${item.date}`}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>
                  <MaterialLinks materials={item.materials} />
                </td>
                <td>
                  <EventBadges events={item.events} />
                </td>
                <td>
                  <DeadlineBadges deadlines={item.deadlines} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
