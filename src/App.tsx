import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import { createBrowserRouter } from "react-router-dom";
import CryptoDetails from "./pages/CryptoDetails";
import { Container, Flex } from "@chakra-ui/react";
import СryptoСurrencies from "./pages/СryptoСurrencies";

const Layout = () => {
    return (
        <Flex direction="column" flex="1">
            <NavBar />
            <Container maxW="5xl">
                <Outlet />
            </Container>
            <Footer />
        </Flex>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <СryptoСurrencies />,
            },
            {
                path: "/coins/:uuid",
                element: <CryptoDetails />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
