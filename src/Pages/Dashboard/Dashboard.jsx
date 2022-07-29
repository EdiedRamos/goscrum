import { Header, TaskForm, Tasks } from "../../Components";
import "./Dashboard.css";

const Dashboard = () => {
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
