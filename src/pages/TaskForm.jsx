import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';


function AssignedTaskCard({ task }) {
  return (
    <div className="assigned-task-card">
      <h3>Task: {task.task}</h3>
      <p><strong>Assignee:</strong> {task.assignee}</p>
      <p><strong>Resource:</strong> {task.resource}</p>
      <p><strong>Date:</strong> {task.date}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
    </div>
  );
}

function TaskForm() {
  const [task, setTask] = useState('');
  const [assignee, setAssignee] = useState('');
  const [resource, setResource] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('high');
  const [assignedTasks, setAssignedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('assignedTasks');
    if (storedTasks) {
      setAssignedTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('assignedTasks', JSON.stringify(assignedTasks));
  }, [assignedTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      task,
      assignee,
      resource,
      date,
      priority
    };

    const updatedTasks = [...assignedTasks, newTask];
    setAssignedTasks(updatedTasks);

    setTask('');
    setAssignee('');
    setResource('');
    setDate('');
    setPriority('high');
  };

  return (
    <>
     
        <div className="task-form-container">
          <form className="task-form" onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
              type="text"
              id="task"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />

            <label htmlFor="assignee">Assignee:</label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              required
            />

            <label htmlFor="resource">Resource:</label>
            <input
              type="text"
              id="resource"
              name="resource"
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              required
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button type="submit">Assign Task</button>
          </form>

          <div>
            <h2>Assigned Tasks:</h2>
            {assignedTasks.length > 0 ? (
              assignedTasks.map((task, index) => (
                <AssignedTaskCard key={index} task={task} />
              ))
            ) : (
              <p>No assigned tasks.</p>
            )}
          </div>
        </div>
    
    </>
  );
}

export default TaskForm;