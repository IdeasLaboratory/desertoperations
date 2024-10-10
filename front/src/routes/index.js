import Basic from "../layouts/basic.vue";
import Empty from "../layouts/empty.vue";

import PageNotFound from "../views/pageNotFound.vue";
import Home from "../views/home.vue";
import Landing from "../views/landing.vue";

const routes = [
  {
    path: "/",
    component: Empty,
    children: [
      { path: "/:pathMatch(.*)*", component: PageNotFound },
      { path: "", component: Landing },
    ],
  },
  {
    path: "/",
    component: Basic,
    children: [{ path: "home", component: Home }],
  },
];

export default routes;
