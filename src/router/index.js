import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import MovieDetailView from "../views/MovieDetailView.vue"


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name : "home",
            component: HomeView
        },
        {
            path: "/movie",
            name : "movie",
            component: MovieDetailView
        },
        {
            path: "/search",
            name : "search",
            component: MovieDetailView
        }

    ],
    linkActiveClass: "active"

})

export default router;