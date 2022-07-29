import { Heading, TaskFilter, TaskSearch, TaskPriority, TaskList } from "../";
import "./Tasks.css";

const Tasks = () => {
  const fakeData = [
    {
      _id: "62c613927dc9787347780034",
      title: "Radiohead",
      time: "7/3/2022, 01:33:20 hs",
      author: "user3",
      state: "new",
      priority: "low",
      content:
        "Esto es un contenido creado para que esta card tenga algo para mostrar, considere que esto no debe tener un sentido tanto por tanto de lo tanto del cuento de la abuta del viejo oste pero ahora quiero speking english pero ya me canse",
    },
    {
      _id: "62c613927dc9787347780054",
      title: "Radiohead",
      time: "7/3/2022, 01:33:20 hs",
      author: "user3",
      state: "new",
      priority: "low",
      content:
        "Esto es un contenido creado para que esta card tenga algo para mostrar, considere que esto no debe tener un sentido tanto por tanto de lo tanto del cuento de la abuta del viejo oste pero ahora quiero speking english pero ya me canse",
    },
    {
      _id: "62c613927dc9787347780035",
      title: "Radiohead",
      time: "7/3/2022, 01:33:20 hs",
      author: "user3",
      state: "new",
      priority: "low",
      content:
        "Esto es un contenido creado para que esta card tenga algo para mostrar, considere que esto no debe tener un sentido tanto por tanto de lo tanto del cuento de la abuta del viejo oste pero ahora quiero speking english pero ya me canse",
    },
    {
      _id: "62c613927dc9787347780036",
      title: "Radiohead",
      time: "7/3/2022, 01:33:20 hs",
      author: "user3",
      state: "new",
      priority: "low",
      content:
        "Esto es un contenido creado para que esta card tenga algo para mostrar, considere que esto no debe tener un sentido tanto por tanto de lo tanto del cuento de la abuta del viejo oste pero ahora quiero speking english pero ya me canse",
    },
  ];
  return (
    <div className="tasks-container">
      <Heading content="Mis tareas" level={3} />
      <div className="task-options-container">
        <TaskFilter />
        <TaskSearch />
        <TaskPriority />
      </div>
      <div className="task-group-container">
        <TaskList state="Nuevas" data={fakeData} />
        <TaskList state="En proceso" data={fakeData} />
        <TaskList state="Finalizadas" data={fakeData} />
      </div>
    </div>
  );
};

export default Tasks;
