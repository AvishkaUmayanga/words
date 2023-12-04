import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import AddWord from "./pages/AddWord";
import UpdateWord from "./pages/UpdateWord";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path : "/guide", element: <Guide/>},
  { path : "/add_word", element: <AddWord/>},
  { path : "/update_word/:id", element: <UpdateWord/> },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
