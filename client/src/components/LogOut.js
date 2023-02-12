// Import dependencies
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

const Logout = () => {
  const store = authStore();

  useEffect(() => {
    store.logout();
  });

  if (store.loggedIn === false) {
    return <Navigate to="/" />;
  }
};

export default Logout;
