import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const UsersView = () => import("../views/UsersView.vue");
const UserView = () => import("../views/UserView.vue");
const AlbumsView = () => import("../views/AlbumsView.vue");
const AlbumView = () => import("../views/AlbumView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/albums",
            name: "albums",
            component: AlbumsView,
        },
        {
            path: "/albums/:albumId",
            name: "album",
            component: AlbumView,
        },
        {
            path: "/user",
            name: "users_list",
            component: UsersView,
        },
        {
            path: "/user/:id",
            name: "user_detail",
            component: UserView,
        },
    ],
});

export default router;
