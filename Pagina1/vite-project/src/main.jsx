import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio } from "./views/Inicio.jsx";
import { Recetas} from "./views/Recetas.jsx";
import { Inscripcion } from "./views/Inscripcion.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Login } from "./views/Login.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { Info } from "./views/Info.jsx";
import { PrivateRoute } from "./navigation/PrivateRoute.jsx";
import { SingleReceta } from "./views/SingleReceta.jsx";
import { Error404 } from "./views/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/inicio",
        element: (
          <PrivateRoute>
            <Inicio />
          </PrivateRoute>
        ),
      },
      {
        path: "/recetas",
        element: (
          <PrivateRoute>
            <Recetas/>
          </PrivateRoute>
        ),
      },
      {
        path: "/inscripcion",
        element: (
          <PrivateRoute>
            <Inscripcion />
          </PrivateRoute>
        ),
      },
      {
        path: "/info",
        element: <Info />,
      },
    {
      path: "/receta/:id",
      element: <SingleReceta />,
    },
    {
      path: "*",
      element: <Error404 />,
    },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
