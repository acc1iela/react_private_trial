import React from 'react';

type TaskProps = {
  task: {
    text: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: (e: React.MouseEvent) => void;
};

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => (
  <li onClick={onToggle} style={{ cursor: 'pointer' }}>
    {task.completed ? <s>{task.text}</s> : task.text}
    <button onClick={onDelete} style={{ marginLeft: '10px' }}>
      Delete
    </button>
  </li>
);

export default Task;
