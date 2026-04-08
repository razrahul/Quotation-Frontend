import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GettingStarted from "./components/GettingStarted";
import "./DashboardPage.scss";
import type { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { getQuotationListbyProfile } from "../../redux/action/quotationActions";
const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const naviagte = useNavigate();

  const { user } = useSelector(
    (state: RootState) => state.auth,
  );
  const { quotationList, loading } = useSelector(
    (state: RootState) => state.quotation,
  );

  useEffect(() => {
    if (!quotationList && !loading) {
      dispatch(getQuotationListbyProfile());
    }
  }, [dispatch, loading, quotationList]);

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
