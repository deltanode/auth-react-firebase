import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"

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
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appConfig} />
  </React.StrictMode>
)
