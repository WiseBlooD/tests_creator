import TestBuilder from "./pages/TestBuilder/TestBuilder.jsx";
import {
    TEST_BUILDER_ROUTE,
    PRIVATE_OFFICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, TEST_ROUTE, MAIN_ROUTE, COMPLETED_TESTS, MY_TESTS_ROUTE
} from "./consts";
import PrivateOffice from "./pages/PrivateOffice/PrivateOffice.jsx";
import Test from "./pages/Test/Test.jsx";
import Main from "./pages/Main/Main.jsx";
import Auth from "./pages/Auth/Auth";

export const authRoutes = [
    {
        path: TEST_BUILDER_ROUTE,
        Component: TestBuilder
    }   ,
    {
        path: PRIVATE_OFFICE_ROUTE,
        Component: PrivateOffice
    },
    {
        path: TEST_ROUTE + '/:id',
        Component: Test
    },
    {
        path: MY_TESTS_ROUTE,
        Component: Test
    },
    {
        path: COMPLETED_TESTS,
        Component: Test
    },

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]