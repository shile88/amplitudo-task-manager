import { useState } from "react";
import classes from "./TaskFormField.module.scss";

const TaskFormField = ({ addTask, formData, setFormData, tasks, editTask }) => {
  const [formTaskData, setFormTaskData] = useState({
    name:
      formData.taskID || formData.taskID === 0
        ? tasks[formData.taskID].name
        : "",
    description:
      formData.taskID || formData.taskID === 0
        ? tasks[formData.taskID].description
        : "",
    status:
      formData.taskID || formData.taskID === 0
        ? tasks[formData.taskID].status
        : "wishlist",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.taskID) {
      addTask(formTaskData);
      setFormData((prevState) => ({ ...prevState, openAddTask: false }));
    }
    if (formData.taskID || formData.taskID === 0) {
      editTask(formTaskData);
      setFormData((prevState) => ({ ...prevState, openEditTask: false }));
    }

    setFormTaskData({
      name: "",
      description: "",
      status: "",
    });
  };

  const handleCloseForm = () => {
    if (formData.openAddTask)
      setFormData((prevState) => ({ ...prevState, openAddTask: false }));
    if (formData.openEditTask)
      setFormData((prevState) => ({ ...prevState, openEditTask: false }));
  };

  return (
    <div className={classes["form-container"]}>
      {formData.openAddTask ? <h2>Add task</h2> : <h2>Edit task</h2>}
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          name="name"
          type="text"
          value={formTaskData.name}
          onChange={handleChange}
          placeholder="Task name"
          required
        />

        <input
          name="description"
          type="text"
          value={formTaskData.description}
          onChange={handleChange}
          placeholder="Task description"
          required
        />
        <div className={classes.dropdown}>
          <label>
            Choose Status:
            <select
              name="status"
              value={formTaskData.status}
              onChange={handleChange}
              required
            >
              <option value="wishlist">Wishlist</option>

              <option value="to-do">To-do</option>

              <option value="in-progress">In-progress</option>

              <option value="done">Done</option>
            </select>
          </label>
          <div className={classes['form-buttons']}>
            {formData.openAddTask ? (
              <button type="submit">Add Task</button>
            ) : (
              <button type="submit">Edit Task</button>
            )}
            <button onClick={handleCloseForm}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskFormField;
