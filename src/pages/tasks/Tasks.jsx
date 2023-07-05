import FilterTaskButtons from "../../components/filterTaskButtons/FilterTaskButtons";
import TaskFormField from "../../components/taskFormField/TaskFormField";
import TasksTable from "../../components/tasksTable/TasksTable";
import classes from "./Tasks.module.scss";
import { useState } from "react";

const Tasks = () => {
  const [filterTasks, setFilterTasks] = useState("");
  const [formData, setFormData] = useState({
    openAddTask: false,
    openEditTask: false,
    taskID: "",
  });

  return (
    <div className={classes.container}>
      <FilterTaskButtons setFilterTasks={setFilterTasks} formData={formData} />

      {(formData.openAddTask || formData.openEditTask) && (
        <TaskFormField
          //addTask={handleAddTask}
          formData={formData}
          setFormData={setFormData}
          //editTask={handleEditTask}
        />
      )}

      <TasksTable
        filterTasks={filterTasks}
        setFormData={setFormData}
        formData={formData}
        //deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Tasks;
