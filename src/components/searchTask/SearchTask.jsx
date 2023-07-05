import { useContext, useEffect } from "react";

import { TaskContext } from "../context/TaskContext";
import classes from "./SearchTask.module.scss";
import useDebounce from "../hooks/useDebounce";

const SearchTask = ({ searchTerm, setSearchTerm, setSearchResults }) => {
  const debouncedSearch = useDebounce(searchTerm, 500);
  const {state} = useContext(TaskContext);

  useEffect(() => {
    const results = state.filter((task) =>
      task.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setSearchResults(results);
  }, [debouncedSearch, state, setSearchResults]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className={classes["input-wrapper"]}>
      <input
        className={classes.input}
        type="search"
        placeholder="Search tasks by name"
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchTask;
