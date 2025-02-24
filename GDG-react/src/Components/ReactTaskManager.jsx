import { useState } from "react";

const ReactTaskManager = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [duedate, setDuedate] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [editindex, setEditIndex] = useState(null);
  const status = "incomplete";

  const handleEdit = (index) => {
    const tasks = task[index];
    setEdit(true);
    setEditIndex(index);
    setTitle(tasks.title);
    setDescription(tasks.description);
    setDuedate(tasks.duedate);
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (edit) {
      const updatedTask = task.map((task, index) =>
        index === editindex ? { title, description, duedate, status } : task
      );
      setTask(updatedTask);
      setEdit(false);
      setEditIndex(null);
    } else {
      setTask([...task, { title, description, duedate, status }]);
    }
    setTitle("");
    setDescription("");
    setDuedate("");
  };

  const handleStatusChange = (index) => {
    const updatedTask = task.map((task, i) =>
      i === index
        ? {
            ...task,
            status: task.status === "Incomplete" ? "Complete" : "Incomplete",
          }
        : task
    );
    setTask(updatedTask);
  };

  const handleDelete = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  };

  const AddTask = () => {
    return (
      <>
        <ul>
          {task.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <h3>{task.description}</h3>
              <h3>Due Date: {task.duedate}</h3>
              <h3>Status: {task.status}</h3>
              <button onClick={() => handleStatusChange(index)}>
                {task.status === "Incomplete"
                  ? "Mark Complete"
                  : "Mark Incomplete"}
              </button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <h1>React Task Manager</h1>
      <form onSubmit={handleTask}>
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Description"
          cols="20"
          rows="4"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <input
          type="date"
          value={duedate}
          onChange={(e) => setDuedate(e.target.value)}
          required
        />
        <button type="submit">{edit ? "Update Task" : "Add Task"}</button>
      </form>
      <AddTask />
    </>
  );
};

export default ReactTaskManager;
