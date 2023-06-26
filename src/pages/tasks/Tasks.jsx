import FilterTaskButtons from "../../components/filterTaskButtons/FilterTaskButtons";
import TaskFormField from "../../components/taskFormField/TaskFormField";
import TasksTable from "../../components/tasksTable/TasksTable";
import classes from "./Tasks.module.scss";
import { useState } from "react";

const Tasks = ({ tasks, setTasks }) => {
  const [filterTasks, setFilterTasks] = useState("");
  const [formData, setFormData] = useState({
    openAddTask: false,
    openEditTask: false,
    taskID: "",
  });

  const handleAddTask = (newTask) => {
    const addedTasks = [
      ...tasks,
      {
        id: tasks.length ? tasks.length : 0,
        name: newTask.name,
        description: newTask.description,
        status: newTask.status,
      },
    ];
    setTasks(addedTasks);
  };

  const handleEditTask = (editedTask) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === formData.taskID) {
        return {
          ...task,
          name: editedTask.name,
          description: editedTask.description,
          status: editedTask.status,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const handleDeleteTask = (id) => {
    const deletedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "deleted",
        };
      }
      return task;
    });
    setTasks(deletedTask);
  };

  return (
    <div className={classes.container}>
      <FilterTaskButtons setFilterTasks={setFilterTasks} formData={formData} />

      {(formData.openAddTask || formData.openEditTask) && (
        <TaskFormField
          addTask={handleAddTask}
          formData={formData}
          setFormData={setFormData}
          tasks={tasks}
          editTask={handleEditTask}
        />
      )}
      
      <TasksTable
        tasks={tasks}
        filterTasks={filterTasks}
        setFormData={setFormData}
        formData={formData}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Tasks;
