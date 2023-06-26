import classes from './TaskTable.module.scss';

const TasksTable = ({
  tasks,
  filterTasks,
  setFormData,
  deleteTask,
  formData,
}) => {
  return (
    <table className={classes.zigzag}>
      <thead>
        <tr>
          <th>Task name</th>
          {filterTasks === "" || filterTasks === "all-tasks" ? (
            <th>Task status</th>
          ) : (
            ""
          )}
          <th>
            <button
              onClick={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  openAddTask: true,
                  taskID: "",
                }))
              }
              disabled={formData.openAddTask || formData.openEditTask}
              className={classes['add-button']}
            >
              Add task
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {filterTasks === "" || filterTasks === "all-tasks"
          ? tasks.map((task) => {
              if (task.status != "deleted")
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                    <td>
                      <div>
                        <button
                          onClick={() =>
                            setFormData({ openEditTask: true, taskID: task.id })
                          }
                          disabled={
                            formData.openAddTask || formData.openEditTask
                          }
                          className={classes['edit-button']}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          disabled={
                            formData.openAddTask || formData.openEditTask
                          }
                          className={classes['delete-button']}
                         
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
            })
          : tasks
              .filter((task) => task.status === filterTasks)
              .map((filteredTask) => (
                <tr key={filteredTask.id}>
                  <td>{filteredTask.name}</td>
                  <td>
                    <div>
                      <button
                        onClick={() =>
                          setFormData({
                            openEditTask: true,
                            taskID: filteredTask.id,
                          })
                        }
                        disabled={formData.openAddTask || formData.openEditTask}
                        className={classes['edit-button']}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(filteredTask.id)}
                        disabled={formData.openAddTask || formData.openEditTask || filteredTask.status === 'deleted'}
                        className={classes['delete-button']}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
