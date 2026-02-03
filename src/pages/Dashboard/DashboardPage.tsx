import GettingStarted from "./components/GettingStarted";
import "./DashboardPage.scss";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <div>
          <p>Hello Neha Verma</p>
          <h2>Welcome to Techtimes</h2>
        </div>
        <button className="primary">+ Create New Quotation</button>
      </div>

      <GettingStarted />
    </div>
  );
};

export default DashboardPage;
