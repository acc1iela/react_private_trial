import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './useTaskManager';

const TaskManager: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskManager();

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onToggle={() => toggleTaskCompletion(index)}
            onDelete={(e) => {
              e.stopPropagation();
              deleteTask(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
