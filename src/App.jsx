import "./index.css";
import Layouts from "./Layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/Profile/profile";
import Certifications from "./components/certfications/Certifications";
import Works from "./components/validation/Validation";
import Validation from "./components/validation/Validation";


function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "certifications",
          element: <Certifications />,
        },
        {
          path: "works",
          element: <Works />,
        },
        {
          path: "validation",
          element: <Validation />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}
export default App;