
import React, { useState } from 'react';
import Task from './Task';


const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Levantarme', completed: false },
    { id: 2, text: 'Cepillarme', completed: false },
    { id: 3, text: 'Tender la cama', completed: false },
    { id: 4, text: 'Bañarme', completed: false },
    { id: 5, text: 'Organizarme', completed: false },
    { id: 6, text: 'Salir', completed: false },
    { id: 7, text: 'Trabajar', completed: false },
    
  ]);

  const handleToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <Task
              text={task.text}
              completed={task.completed}
              onToggle={() => handleToggle(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
