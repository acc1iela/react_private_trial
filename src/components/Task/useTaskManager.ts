import { useState } from 'react';

type Task = {
  text: string;
  completed: boolean;
};

const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    if (newTask) {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
    }
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask };
};

export default useTaskManager;
