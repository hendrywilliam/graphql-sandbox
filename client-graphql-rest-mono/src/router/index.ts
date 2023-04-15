import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const UserDetail = () => import("../views/UserView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/user/:id",
            name: "user_detail",
            component: UserDetail,
        },
    ],
});

export default router;
