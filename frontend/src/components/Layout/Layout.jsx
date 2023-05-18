import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import RouteTour from "../../router/RouteTour";
import { AuthContext } from "../../context/authContext";
import AdminNavbar from "../navbar/AdminNavbar";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // to render the alternative Navbar or the default Navbar
  const showAdminNavbar =
    location.pathname === "/admin" ||
    location.pathname === "/users" ||
    location.pathname === "/hotels" ||
    location.pathname === "/tours" ||
    location.pathname === "/vehicle" ||
    location.pathname === "/train" ||
    location.pathname === "/adduser" ||
    location.pathname === "/userpage" ||
    location.pathname === "/update";

  const showFinaceNavbar =
    location.pathname === "/finace" ||
    location.pathname === "/finance/salary" ||
    location.pathname === "/finance/employee" ||
    location.pathname === "/finance/salarySheet" ||
    location.pathname === "/finance/FinanceHealth" ||
    location.pathname === "/finance/refund" ||
    location.pathname === "/finance/addRefund" ||
    location.pathname === "/finance/updateRefund/:id";

  return (
    <div>
      {showAdminNavbar ? (
        <AdminNavbar />
      ) : showFinaceNavbar ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}
      <RouteTour />
      <Footer />
    </div>
  );
};

export default Layout;
