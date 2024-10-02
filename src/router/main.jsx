import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

const MainRouter = createBrowserRouter([{ path: "/", element: <Main /> }]);

export default MainRouter;
