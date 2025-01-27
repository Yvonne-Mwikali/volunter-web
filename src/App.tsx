import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
import { RootLayout } from "./pages/layout";
import { MainHomePages } from "./pages/main";
import NotFound from "./pages/not-found";
import { AboutDetailPage } from "./home/about-detail-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <MainHomePages />,
        },
        {
          path: "about",
          element: <AboutDetailPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
