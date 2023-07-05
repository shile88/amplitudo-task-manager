import { useContext, useState } from "react";

import DropDown from "./dropDown/DropDown";
import Input from "./input/Input";
import { TaskContext } from "../context/TaskContext";
import classes from "./TaskFormField.module.scss";

const TaskFormField = ({ formData, setFormData }) => {
  const { state, dispatch } = useContext(TaskContext);
  const [formTaskData, setFormTaskData] = useState({
    name:
      formData.taskID || formData.taskID === 0
        ? state[formData.taskID].name
        : "",
    description:
      formData.taskID || formData.taskID === 0
        ? state[formData.taskID].description
        : "",
    status:
      formData.taskID || formData.taskID === 0
        ? state[formData.taskID].status
        : "wishlist",
    id: 
      formData.taskID || formData.taskID === 0
        ? state[formData.taskID].id
        : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.taskID) {
      dispatch({ type: "ADD_TASK", payload: formTaskData });
      setFormData((prevState) => ({ ...prevState, openAddTask: false }));
    }
    if (formData.taskID || formData.taskID === 0) {
      dispatch({
        type: "EDIT_TASK",
        payload: formTaskData,
      });
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
        <Input
          name="name"
          type="text"
          defaultValue={formTaskData.name}
          setFormTaskData={setFormTaskData}
          placeholder="Task name"
          required
        />
        <Input
          name="description"
          type="text"
          defaultValue={formTaskData.description}
          setFormTaskData={setFormTaskData}
          placeholder="Task description"
          required
        />

        <DropDown
          name="status"
          value={formTaskData.status}
          setFormTaskData={setFormTaskData}
          required
        />

        <div className={classes["form-buttons"]}>
          {formData.openAddTask ? (
            <button type="submit">Add Task</button>
          ) : (
            <button type="submit">Edit Task</button>
          )}
          <button onClick={handleCloseForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskFormField;
