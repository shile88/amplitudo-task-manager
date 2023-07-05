import { createContext, useReducer } from "react";
import taskReducer, { initialState } from "../reducer/taskReducer";

export const TaskContext = createContext(initialState);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return <TaskContext.Provider value={{state, dispatch}}>{children}</TaskContext.Provider>;
};
