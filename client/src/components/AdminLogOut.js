// Import dependencies
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

const Logout = () => {
  const store = authStore();

  useEffect(() => {
    store.adminLogout();
  });
  if (store.adminLoggedIn === false) {
    return <Navigate to="/" />;
  }
};

export default Logout;
