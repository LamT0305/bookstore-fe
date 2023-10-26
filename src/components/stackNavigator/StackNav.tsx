import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";
import Home from "../../pages/Home";
import Footer from "../footer/Footer";
import AllBooks from "../../pages/AllBooks";
import Authenticate from "../auth/Authenticate";
import CurrentUser from "../../pages/CurrentUser";
import Manager from "../../pages/Manager";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/log-in",
        element: <Authenticate />,
      },
      {
        path: "/current-user",
        element: <CurrentUser />,
      },
      {
        path:"/management",
        element: <Manager/>,
      }
    ],
  },
]);

function stackNav() {
  return <RouterProvider router={router} />;
}

export default stackNav;
