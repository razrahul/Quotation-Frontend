import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar/Navbar";

export default function PublicQutations() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
