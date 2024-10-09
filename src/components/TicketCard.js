import React from 'react';
import lowPriorityIcon from '../assets/icons_FEtask/Img - Low Priority.svg';
import mediumPriorityIcon from '../assets/icons_FEtask/Img - Medium Priority.svg';
import highPriorityIcon from '../assets/icons_FEtask/Img - High Priority.svg';
import urgentPriorityIcon from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';

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
  const user = users.find(u => u.id === ticket.userId);

  return (
    <div className="ticket-card">
      <div className="ticket-card-header">
        <h3>{ticket.title}</h3>
        <img src={getPriorityIcon(ticket.priority)} alt={`Priority ${ticket.priority}`} className="priority-icon" />
      </div>

      <div className="ticket-card-body">
        <p>Status: {ticket.status}</p>
        {user ? (
          <p>Assigned to: 
            <img src={user.avatar || ''} alt={user.name} className="user-avatar" />
            {user.name}
            {user.available ? ' (Available)' : ' (Unavailable)'}
          </p>
        ) : (
          <p>Assigned to: Unknown User</p>
        )}
      </div>
    </div>
  );
}

export default TicketCard;
