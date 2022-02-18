const Layout = () => import("@/layouts/Layout.vue");

// Pages: Auth
const AuthSignIn = () => import("@/views/pages/auth/SignIn.vue");
const AuthSignUp = () => import("@/views/pages/auth/AuthSignUp.vue");

const Home = () => import("@/views/pages/Home.vue");
const About = () => import("@/views/pages/About.vue");

export default [
    {
        path: "/login",
        name: "login",
        component: AuthSignIn,
    },
    {
        path: "/register",
        name: "Register",
        component: AuthSignUp,
    },
    {
        path: "/",
        component: Layout,
        meta: {
            authOnly: true,
        },
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "about",
                name: "About",
                component: About,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "/:catchAll(.*)", // Unrecognized path automatically matches home
                redirect: "/home",
            },
        ],
    },
];
