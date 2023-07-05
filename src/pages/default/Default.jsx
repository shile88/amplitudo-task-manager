import { useContext, useState } from "react";

import SearchTask from "../../components/searchTask/SearchTask";
import { TaskContext } from "../../components/context/TaskContext";
import TaskList from "../../components/taskList/TaskList";
import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";
import classes from "./Default.module.scss";

const Default = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {state} = useContext(TaskContext);

  return (
    <div className={classes["default-container"]}>
      <SearchTask
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
      />

      {state.length === 0 ? (
        <h1>Currently no tasks. Click on top right button to add.</h1>
      ) : (
        <TasksWrapper>
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "wishlist")
                : state.filter((task) => task.status === "wishlist")
            }
            status="Wishlist"
            color="blue"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "to-do")
                : state.filter((task) => task.status === "to-do")
            }
            status="To-do"
            color="red"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "in-progress")
                : state.filter((task) => task.status === "in-progress")
            }
            status="In-progress"
            color="orange"
          />
          <TaskList
            tasks={
              searchTerm
                ? searchResults.filter((task) => task.status === "done")
                : state.filter((task) => task.status === "done")
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
