import { useState } from 'react';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTaskText: string) => {
    if (newTaskText) {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask };
};

export default useTaskManager;
