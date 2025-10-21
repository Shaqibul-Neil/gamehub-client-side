import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import NewReleases from "../pages/NewReleases";
import Events from "../pages/Events";
import Donate from "../pages/Donate";
import Community from "../pages/Community";
import Games from "../pages/Games";

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
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
