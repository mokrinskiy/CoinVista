import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import CryptoDetails from "./pages/CryptoDetails";
import { Container } from "@chakra-ui/react";

const Layout = () => {
    return (
        <Container maxW="5xl">
            <NavBar />
            <Outlet />
            <Footer />
        </Container>
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
            {
                path: "/coin/:id",
                element: <CryptoDetails />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
