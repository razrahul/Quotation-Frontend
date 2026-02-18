import { useSelector } from "react-redux";
import GettingStarted from "./components/GettingStarted";
import "./DashboardPage.scss";
import type {RootState} from "../../redux/store";
import { useNavigate } from "react-router-dom";
const DashboardPage = () => {

  const naviagte = useNavigate();

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
        <button className="primary"
        onClick={() => naviagte("/quotation")}
        >+ Create New Quotation</button>
      </div>

      <GettingStarted />
    </div>
  );
};

export default DashboardPage;
