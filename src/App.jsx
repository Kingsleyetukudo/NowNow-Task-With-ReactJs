import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Tables from "./pages/Tables";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Tables />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
