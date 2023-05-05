import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import Signin from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import ProtectedRoute from "./components/ProtectedRoute"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />
      },
      {
        path: "/register",
        element: <Signup />
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appConfig} />
  </React.StrictMode>
)
