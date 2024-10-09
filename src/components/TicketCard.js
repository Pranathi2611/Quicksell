import React from "react";
import lowPriorityIcon from "../assets/icons_FEtask/Img - Low Priority.svg";
import mediumPriorityIcon from "../assets/icons_FEtask/Img - Medium Priority.svg";
import highPriorityIcon from "../assets/icons_FEtask/Img - High Priority.svg";
import urgentPriorityIcon from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import "./Ticketcard.css"

function TicketCard({ ticket, users }) {
  // Function to get the priority icon based on the ticket's priority level
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 1:
        return lowPriorityIcon;
      case 2:
        return mediumPriorityIcon;
      case 3:
        return highPriorityIcon;
      case 4:
        return urgentPriorityIcon;
      default:
        return null;
    }
  };

  // Use `find()` to locate the user by their userId
  const user = users.find((u) => u.id === ticket.userId);

  return (
    <div className="ticket-card" style={{display:'flex'}}>
      <div style={{display:'block'}}>
      <div className="ticket-card-header">
        <div style={{ display: "flex" }}>
          <h4>{ticket.id}</h4>
        </div>

        <h3>{ticket.title}</h3>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={getPriorityIcon(ticket.priority)}
          alt={`Priority ${ticket.priority}`}
          className="priority-icon"
        />
        <p style={{ marginLeft: "10px" }}>Feature Request</p>
      </div>
      </div>
      <div className="ticket-card-body" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {user ? (
          <div className="user-info">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/stickers/50/user-male-circle.png"
              alt="user-male-circle"
              className="user-avatar"
            />
            <div
              className={`availability-dot ${
                user.available ? "available" : "unavailable"
              }`}
            ></div>
          </div>
        ) : (
          <p>Assigned to: Unknown User</p>
        )}
      </div>
    </div>
  );
}

export default TicketCard;
