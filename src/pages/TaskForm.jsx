import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';

function TaskForm() {
  const [task, setTask] = useState('');
  const [assignee, setAssignee] = useState('');
  const [resource, setResource] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('high');
  const [assignedTasks, setAssignedTasks] = useState([]);

  // Load assigned tasks from sessionStorage on component mount
  useEffect(() => {
    const storedTasks = sessionStorage.getItem('assignedTasks');
    if (storedTasks) {
      setAssignedTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update sessionStorage whenever assigned tasks change
  useEffect(() => {
    sessionStorage.setItem('assignedTasks', JSON.stringify(assignedTasks));
  }, [assignedTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      task,
      assignee,
      resource,
      date,
      priority
    };

    // Add the new task to the list of assigned tasks
    setAssignedTasks([...assignedTasks, newTask]);

    // Clear the form fields
    setTask('');
    setAssignee('');
    setResource('');
    setDate('');
    setPriority('high');
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task">Task :</label>
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
        <ul>
          {assignedTasks.map((task, index) => (
            <li key={index}>
              <strong>Task:</strong> {task.task}<br/>
              <strong>Assignee:</strong> {task.assignee}<br/>
              <strong>Resource:</strong> {task.resource}<br/>
              <strong>Date:</strong> {task.date}<br/>
              <strong>Priority:</strong> {task.priority}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskForm;