export const initialState = [];

const taskReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length ? state.length : 0,
          name: payload.name,
          description: payload.description,
          status: payload.status,
        },
      ];
    case "EDIT_TASK":
      return state.map((task) => {
        if (task.id === payload.id) {
          return {
            ...task,
            name: payload.name,
            description: payload.description,
            status: payload.status,
          };
        }
        return task;
      });
    case "REMOVE_TASK":
      return state.map((task) => {
        if (task.id === payload) {
          return {
            ...task,
            status: "deleted",
          };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
