import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { FaSearch, FaChevronLeft } from "react-icons/fa";

import "./events.css";

function Events() {
  /* =========================
     Upcoming Events
  ========================= */

//   const upcomingEvents = [];

  // Example:
  const upcomingEvents = [
    {
      title: "Annual Function",
      date: "20 May 2026",
      description: "School annual cultural program."
    }
  ];

  /* =========================
     Latest Past Events
  ========================= */

  const pastEvents = [
    {
      day: "14",
      month: "MAY",
      year: "2023",
      date: "May 14, 2023",
      title: "Mother's Day / Father Day",
    },

    {
      day: "1",
      month: "MAY",
      year: "2023",
      date: "May 1, 2023 - June 4, 2023",
      title: "Summer Vacation (01/05/2023 to 04/06/2023)",
    },

    {
      day: "29",
      month: "APR",
      year: "2023",
      date: "April 29, 2023",
      title: "Final Exam Result",
    },
  ];

  return (
    <section className="events-section">
      {/* Header */}
      <div className="events-header">
        <Container>
          <h2>Events for May 2026</h2>

          {/* <p>
            Home / <span>Events</span>
          </p> */}
        </Container>
      </div>

      {/* Main */}
      <Container>
        {/* Search */}
        <div className="events-topbar">
          <div className="search-box">
            <FaSearch className="search-icon" />

            <Form.Control
              type="text"
              placeholder="Search for events"
            />
          </div>

          <button className="find-btn">
            FIND EVENTS
          </button>
        </div>

        {/* Month */}
        <div className="month-bar">
          <button className="month-btn">
            <FaChevronLeft />
          </button>

          <button className="current-btn">
            This Month
          </button>

          <h4>May 2026</h4>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-section">
          {upcomingEvents.length === 0 ? (
            <div className="no-events">
              There are no upcoming events.
            </div>
          ) : (
            <Row className="g-4">
              {upcomingEvents.map((event, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="event-card">
                    <Card.Body>
                      <h5>{event.title}</h5>

                      <span>{event.date}</span>

                      <p>{event.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>

        {/* Past Events */}
        <div className="past-events">
          <h3>Latest Past Events</h3>

          {pastEvents.map((event, index) => (
            <div key={index} className="past-event-item">
              {/* Date */}
              <div className="event-date">
                <span className="month">
                  {event.month}
                </span>

                <h4>{event.day}</h4>

                <span className="year">
                  {event.year}
                </span>
              </div>

              {/* Content */}
              <div className="event-content">
                <small>{event.date}</small>

                <h5>{event.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Events;