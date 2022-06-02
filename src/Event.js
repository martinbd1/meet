// src/Event.js

import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true,
      }

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
      };

    //event summary
    //event start.dateTime (start.timeZone)
    //event summary | location
    //botton (open/collapse)
    //link to calendar details
    //event description
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    
    return (
        <div className="event">
            <h2 className="summary">{event.summary}</h2>
            <p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>
            <p className="location">@{event.summary} | {event.location}</p>
            
            <button className={`details-button ${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>
                {collapsed ? "Show Details" : "Hide Details"}
            </button>

            {!collapsed && (
                <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
                    <h3>About event:</h3>
                    <a href={event.htmlLink} rel="noreferrer" target="_blank">
                        See details on Google Calendar
                    </a>
                    <p className="event-description">{event.description}</p>
                </div>
            )}

        </div>
    );
  }
}
export default Event;