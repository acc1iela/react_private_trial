import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './useTaskManager';

const TaskManager: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskManager();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" value={newTask} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={() => toggleTaskCompletion(task.id)}
            onDelete={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
