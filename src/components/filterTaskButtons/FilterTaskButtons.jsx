import classes from './FilterTaskButtons.module.scss';
import {useState} from 'react';

const FilterTaskButtons = ({ setFilterTasks, formData }) => {

    const [clickedFilter, setClickedFilter] = useState('');

  const filterButtons = [
    "All-tasks",
    "Wishlist",
    "To-do",
    "In-progress",
    "Done",
    "Deleted",
  ];

  const handleClick = (item) => {
    setFilterTasks(item.toLowerCase())
    setClickedFilter(item);
  }
  

  return (
    <div className={classes['filter-buttons-wrapper']}>
      {filterButtons.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item)}
          disabled={formData.openAddTask || formData.openEditTask}
          className={`${classes[item.toLowerCase()]} ${classes[clickedFilter === item ? 'active' : '']}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterTaskButtons;
