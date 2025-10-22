import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NewReleases from "../pages/NewReleases";
import Events from "../pages/Events";
import Donate from "../pages/Donate";
import Community from "../pages/Community";
import Games from "../pages/Games";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/games",
        Component: Games,
      },
      {
        path: "/new-releases",
        Component: NewReleases,
      },
      {
        path: "/events",
        Component: Events,
      },
      {
        path: "/donate",
        Component: Donate,
      },
      {
        path: "/community",
        Component: Community,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/profile",
        Component: MyProfile,
      },
      {
        path: "/update-profile",
        Component: UpdateProfile,
      },
    ],
  },
]);

export default router;
