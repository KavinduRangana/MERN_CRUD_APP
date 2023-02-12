// Import dependencies
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

export default function RequireAuth(props) {
  const store = authStore();

  // Check authentication
  useEffect(() => {
    if (store.loggedIn === null) {
      store.authCheck();
    }
  }, []);

  // When authentication failed, navigate user login page
  if (store.loggedIn === false) {
    return <Navigate to="/" />;
  }

  return <div>{props.children}</div>;
}
