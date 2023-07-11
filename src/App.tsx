import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Layout from "./components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
