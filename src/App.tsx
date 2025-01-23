import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { RootLayout } from "./pages/layout";
import { MainHomePages } from "./pages/main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <MainHomePages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
