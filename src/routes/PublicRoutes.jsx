import { createBrowserRouter } from "react-router-dom";
import Classification from "../pages/image classification/Classification";
import Root from "../pages/root/Root";
import Homepage from "../pages/homepage/Homepage";
import Datavis from "../pages/data visualization/Datavis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/classification",
        element: <Classification></Classification>,
      },
      {
        path: "/Data-visualization",
        element: <Datavis></Datavis>,
      },
    ],
  },
]);

export default router;
