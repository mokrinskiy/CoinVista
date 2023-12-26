import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import { createBrowserRouter } from "react-router-dom";

const Layout = () => {
    return (
        <div className="max-w-6xl m-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
