// Import dependencies
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

export default function RequireAdminAuth(props) {
  const store = authStore();

  // Check authentication
  useEffect(() => {
    if (store.adminLoggedIn === null) {
      store.adminAuthCheck();
    }
  }, []);

  // When authentication failed, navigate admin login page
  if (store.adminLoggedIn === false) {
    return <Navigate to="/admin" />;
  }

  return <div>{props.children}</div>;
}
