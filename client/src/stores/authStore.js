import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,
  adminLoggedIn: null,

  // user login data
  loginForm: {
    email: "",
    password: "",
  },

  // user signup data
  signupForm: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },

  // admin login data
  adminLoginForm: {
    email: "",
    password: "",
  },

  // admin signup data
  AdminCreateForm: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },

  // user login form update
  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  // user signup form update
  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  // admin login form update
  updateAdminLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        adminLoginForm: {
          ...state.adminLoginForm,
          [name]: value,
        },
      };
    });
  },

  // admin signup form update
  updateAdminCreateForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        AdminCreateForm: {
          ...state.AdminCreateForm,
          [name]: value,
        },
      };
    });
  },

  // user login function
  login: async () => {
    const { loginForm } = authStore.getState();

    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        loginForm,
        { withCredentials: true }
      );

      console.log(res);
      set({
        loggedIn: true,
        loginForm: {
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  // admin login function
  AdminLogin: async () => {
    const { adminLoginForm } = authStore.getState();

    try {
      const res = await axios.post(
        "http://localhost:8000/admin/login",
        adminLoginForm,
        { withCredentials: true }
      );

      console.log(res);
      set({
        adminLoggedIn: true,
        adminLoginForm: {
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  // check user authentication
  authCheck: async () => {
    try {
      await axios.get("http://localhost:8000/user/auth", {
        withCredentials: true,
      });

      set({ loggedIn: true });
    } catch (err) {
      console.log(err);
      set({ loggedIn: false });
    }
  },

  // check admin authentication
  adminAuthCheck: async () => {
    try {
      await axios.get("http://localhost:8000/admin/auth", {
        withCredentials: true,
      });

      set({ adminLoggedIn: true });
    } catch (err) {
      console.log(err);
      set({ adminLoggedIn: false });
    }
  },

  // user signup function
  signup: async () => {
    const { signupForm } = authStore.getState();

    try {
      const res = await axios.post(
        "http://localhost:8000/user/signup",
        signupForm,
        { withCredentials: true }
      );
      console.log(res);
      set({
        signupForm: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  // admin signup function
  adminSignup: async () => {
    const { AdminCreateForm } = authStore.getState();

    try {
      const res = await axios.post(
        "http://localhost:8000/admin/signup",
        AdminCreateForm,
        { withCredentials: true }
      );
      console.log(res);
      set({
        AdminCreateForm: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  // user logout function
  logout: async () => {
    await axios.get("http://localhost:8000/user/logout", {
      withCredentials: true,
    });
    set({ loggedIn: false });
    console.log("logout");
  },

  // admin logout function
  adminLogout: async () => {
    await axios.get("http://localhost:8000/admin/logout", {
      withCredentials: true,
    });
    set({ adminLoggedIn: false });
    console.log("logout");
  },
}));

export default authStore;
