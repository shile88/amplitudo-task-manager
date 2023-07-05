import Table from "./table/Table";

const TasksTable = ({ filterTasks, setFormData, formData }) => {
  return (
    <Table header={filterTasks} formData={formData} setFormData={setFormData} />
  );
};

export default TasksTable;
