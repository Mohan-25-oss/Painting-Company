import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ContactUs from "../../pages/Contact/Contact";
import Hero from "../../pages/Hero/Hero";
import Services from "../../pages/Services/Services";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Reviews from "../../pages/Reviews/Reviews";
// import NotFound from "../../../NotFound";
// import SignIn from "../../pages/SignIn/SignIn";
// import SignUp from "../../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/hero',
                element: <Hero></Hero>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            // {
            //     path: '/sign-in',
            //     element: <SignIn />
            // },
            // {
            //     path: '/sign-up',
            //     element: <SignUp />
            // },
            // {
            //     path: '*',
            //     element: <NotFound />
            // }
        ]
    }
]);

export default router;
