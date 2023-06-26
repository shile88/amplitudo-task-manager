import classes from "./SearchTask.module.scss";

const SearchTask = ({ searchTerm, setSearchTerm, tasks, setSearchResults }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());

    const results = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div className={classes['input-wrapper']}>
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
