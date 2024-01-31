import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="scroll-smooth">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
