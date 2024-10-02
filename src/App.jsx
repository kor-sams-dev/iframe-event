import { RouterProvider } from "react-router-dom";
import MainRouter from "./router/main";

function App() {
  return <RouterProvider router={MainRouter} />;
}

export default App;
