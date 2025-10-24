import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Events from "../pages/Events";
import Games from "../pages/Games";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import GameDetails from "../pages/GameDetails";
import PrivateRoutes from "./PrivateRoutes";
import TermsConditions from "../pages/TermsConditions";
import ErrorPage from "../pages/ErrorPage";
import UpcomingRelease from "../pages/UpcomingRelease";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
        path: "/upcoming-games",
        element: (
          <PrivateRoutes>
            <UpcomingRelease></UpcomingRelease>
          </PrivateRoutes>
        ),
      },
      {
        path: "/events",
        element: (
          <PrivateRoutes>
            <Events></Events>
          </PrivateRoutes>
        ),
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
        path: "/terms-conditions",
        Component: TermsConditions,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/game-details/:title",
        element: (
          <PrivateRoutes>
            <GameDetails></GameDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
