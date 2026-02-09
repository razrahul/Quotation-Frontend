import { useSelector } from "react-redux";
import GettingStarted from "./components/GettingStarted";
import "./DashboardPage.scss";
import type {RootState} from "../../redux/store";
const DashboardPage = () => {

  const {  user } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <div className="dashboard">
      <div className="top">
        <div>
          <p>{user?.name}</p>
          <h2>Welcome to Techtimes</h2>
        </div>
        <button className="primary">+ Create New Quotation</button>
      </div>

      <GettingStarted />
    </div>
  );
};

export default DashboardPage;
