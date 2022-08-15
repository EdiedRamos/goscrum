import { useEffect } from "react";
import { Header, TaskForm, Tasks } from "../../Components";
import "./Dashboard.css";

import { useDispatch } from "react-redux";
import { setAllTasks } from "../../Services/Store/Actions/tasksActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllTasks());
  }, []);
  return (
    <>
      <Header />
      <div className="activity-container">
        <TaskForm />
        <Tasks />
      </div>
    </>
  );
};

export default Dashboard;
