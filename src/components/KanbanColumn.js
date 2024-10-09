import React from 'react';
import TicketCard from './TicketCard'; // Import TicketCard component
import todoIcon from '../assets/icons_FEtask/To-do.svg'; // Example status icons
import inProgressIcon from '../assets/icons_FEtask/in-progress.svg';
import doneIcon from '../assets/icons_FEtask/Done.svg';
import backlogIcon from '../assets/icons_FEtask/Backlog.svg';
import cancelledIcon from '../assets/icons_FEtask/Cancelled.svg';

function KanbanColumn({ groupName, tickets, users }) {
  
  // Map group name to corresponding icons
  const getStatusIcon = (groupName) => {
    switch (groupName.toLowerCase()) {
      case 'todo':
        return todoIcon;
      case 'in progress':
        return inProgressIcon;
      case 'done':
        return doneIcon;
      case 'backlog':
        return backlogIcon;
      case 'cancelled':
        return cancelledIcon;
      default:
        return null;
    }
  };

  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <img 
          src={getStatusIcon(groupName)} 
          alt={`${groupName} icon`} 
          className="status-icon"
        /><h2 className="kanban-column-title">{groupName}</h2>
      </div>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} users={users} /> // Pass the users object
      ))}
    </div>
  );
}

export default KanbanColumn;
