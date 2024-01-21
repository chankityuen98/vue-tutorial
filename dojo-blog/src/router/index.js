import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";
import Page5 from "../views/Page5.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";

const routes = [
  {
    path: "/page-1",
    name: "page-1",
    component: Page1,
  },
  {
    path: "/page-2",
    name: "page-2",
    component: Page2,
  },
  {
    path: "/page-3",
    name: "page-3",
    component: Page3,
  },
  {
    path: "/page-4",
    name: "page-4",
    component: Page4,
  },
  {
    path: "/page-5",
    name: "page-5",
    component: Page5,
  },
  {
    path: "/post/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/page-6",
    name: "Create",
    component: Create,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
