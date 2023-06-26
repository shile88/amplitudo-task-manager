import TaskCard from "../taskCard/taskCard";
import classes from './TaskList.module.scss';

const TaskList = ({ tasks, status, color }) => {
  return (
    <div className={`${classes['task-list']} ${classes[color]}`}>
      <h2 className={classes['task-status']}>{status}</h2>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
