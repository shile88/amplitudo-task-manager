import SearchTask from "../../components/searchTask/SearchTask";
import TaskList from "../../components/taskList/TaskList";
import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";
import classes from "./Default.module.scss";
import { useState } from "react";

const Default = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={classes["default-container"]}>
      <SearchTask
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        tasks={tasks}
        setSearchResults={setSearchResults}
      />

      {tasks.length === 0 ? (
        <h1>Currently no tasks. Click on top right button to add.</h1>
      ) : (
        <TasksWrapper>
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "wishlist")
                : tasks.filter((task) => task.status === "wishlist")
            }
            status="Wishlist"
            color="blue"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "to-do")
                : tasks.filter((task) => task.status === "to-do")
            }
            status="To-do"
            color="red"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "in-progress")
                : tasks.filter((task) => task.status === "in-progress")
            }
            status="In-progress"
            color="orange"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "done")
                : tasks.filter((task) => task.status === "done")
            }
            status="Done"
            color="green"
          />{" "}
        </TasksWrapper>
      )}
    </div>
  );
};

export default Default;
