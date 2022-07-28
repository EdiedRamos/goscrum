import { Label, Input } from "../";

const TaskFilter = () => {
  return (
    <>
      <Input type="radio" name="radio-group" id="todas" checked={true} />
      <Label content="Todas" htmlFor="todas" />
      <Input type="radio" name="radio-group" id="mis-tareas" />
      <Label content="Mis tareas" htmlFor="mis-tareas" />
    </>
  );
};

export default TaskFilter;
