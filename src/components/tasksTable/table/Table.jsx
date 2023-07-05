import { TaskContext } from '../../context/TaskContext';
import classes from './Table.module.scss';
import { useContext } from 'react';

const TasksTable = ({
  header,
  setFormData,
  formData,
}) => {

const {state, dispatch} = useContext(TaskContext);

  return (
    <table className={classes.zigzag}>
      <thead>
        <tr>
          <th>Task name</th>
          {header === "" || header === "all-tasks" ? (
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
        {header === "" || header === "all-tasks"
          ? state.map((task) => {
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
                          onClick={() => dispatch({type: 'REMOVE_TASK', payload: task.id})}
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
          : state
              .filter((task) => task.status === header)
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
                        onClick={() => dispatch({type: 'REMOVE_TASK', payload: filteredTask.id})}
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
