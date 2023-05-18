import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Profile from "./Components/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";

function App() {
  const currUser = true;

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode);
  const Layout = () => {
    return (
      <div className={`${darkMode && "dark"} `}>
        <Navbar />
        <div className="flex">
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
