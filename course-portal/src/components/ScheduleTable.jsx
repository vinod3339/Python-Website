import { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { schedule } from '../data/courseData'

function MaterialLinks({ materials }) {
  if (!materials?.length) return null
  return (
    <>
      {materials.map((m) => {
        if (m.type === 'colab') return null
        const isExternal = m.url?.startsWith('http') ?? false
        const isDownloadable =
          !isExternal && (m.download || m.type === 'ppt' || m.type === 'pdf')
        return (
          <a
            key={m.label}
            href={m.url || '#'}
            className="material-link"
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

function ColabLinks({ materials }) {
  const colabItems = materials?.filter((m) => m.type === 'colab') ?? []
  if (!colabItems.length) return null
  return (
    <>
      {colabItems.map((m) => (
        <a
          key={m.label}
          href={m.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${m.label} in Google Colab`}
          style={{ display: 'inline-block', marginRight: '4px' }}
        >
          <img
            src="https://colab.research.google.com/assets/colab-badge.svg"
            alt={`Open ${m.label} in Colab`}
            style={{ height: '20px', verticalAlign: 'middle' }}
          />
        </a>
      ))}
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
            <th style={{ width: '10%' }}>Date</th>
            <th style={{ width: '30%' }}>Description</th>
            <th style={{ width: '20%' }}>Course Materials</th>
            <th style={{ width: '10%' }}>Colab</th>
            <th style={{ width: '15%' }}>Events</th>
            <th style={{ width: '15%' }}>Deadlines</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => {
            if (item.entries) {
              return (
                <Fragment key={`week-${item.week ?? index}`}>
                  <tr className="week-header">
                    <td colSpan={6}>Week {item.week}</td>
                  </tr>
                  {item.category && (
                    <tr key={`cat-${item.week ?? index}`} className="category-header">
                      <td colSpan={6}>{item.category}</td>
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
                        <ColabLinks materials={entry.materials} />
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
                  <ColabLinks materials={item.materials} />
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
