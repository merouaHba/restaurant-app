/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider} from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App.jsx";
import { About, Home, Reservation } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home /> },
      {path:"about",element: <About/>},
      {path:"reservation",element: <Reservation/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
