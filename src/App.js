import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import FormModal from "./components/FormModal";
import { Toaster } from "react-hot-toast";

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
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <RouterProvider router={appRouter} />
    
    </div>
  );
}

export default App;
