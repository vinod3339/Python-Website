import { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { schedule } from '../data/courseData'

function MaterialLinks({ materials }) {
  if (!materials?.length) return null
  return (
    <>
      {materials.map((m) => {
        const isExternal = m.url?.startsWith('http') ?? false
        const isDownloadable =
          !isExternal && (m.download || m.type === 'ppt' || m.type === 'pdf')
        return (
          <a
            key={m.label}
            href={m.url || '#'}
            className={`material-link${m.type === 'colab' ? ' assignment' : ''}`}
            {...(isDownloadable && m.url && m.url !== '#'
              ? { download: m.download || `${m.label}.pptx` }
              : {})}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            [{m.label}]
            {m.type === 'excel' && <i className="bi bi-file-earmark-excel ms-1" title="Excel" />}
            {isDownloadable && m.url && m.url !== '#' && (
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
                    <tr key={`${item.week}-${entry.date || entry.Date}`}>
                      <td>{entry.date || entry.Date}</td>
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

            const itemDate = item.date || item.Date || ''
            return (
              <tr key={`entry-${index}-${itemDate}`}>
                <td>{itemDate}</td>
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

