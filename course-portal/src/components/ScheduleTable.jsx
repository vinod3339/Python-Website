import { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { schedule } from '../data/courseData'

function MaterialLinks({ materials }) {
  if (!materials?.length) return null
  return (
    <>
      {materials.map((m) => (
        <a
          key={m.label}
          href={m.url}
          className={`material-link${m.type === 'colab' ? ' assignment' : ''}`}
        >
          [{m.label}]
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
            <th style={{ width: '12%' }}>Date</th>
            <th style={{ width: '35%' }}>Description</th>
            <th style={{ width: '25%' }}>Course Materials</th>
            <th style={{ width: '15%' }}>Events</th>
            <th style={{ width: '13%' }}>Deadlines</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((week) => (
            <Fragment key={`week-${week.week}`}>
              <tr className="week-header">
                <td colSpan={5}>Week {week.week}</td>
              </tr>
              {week.category && (
                <tr key={`cat-${week.week}`} className="category-header">
                  <td colSpan={5}>{week.category}</td>
                </tr>
              )}
              {week.entries.map((entry) => (
                <tr key={`${week.week}-${entry.date}`}>
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
          ))}
        </tbody>
      </Table>
    </div>
  )
}
