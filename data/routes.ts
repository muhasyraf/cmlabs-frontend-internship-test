type Route = {
  title: string;
  path: string;
};

const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Foods",
    path: "/foods",
  },
  {
    title: "Ingredients",
    path: "/ingredients",
  },
  {
    title: "Local Culinary",
    path: "/local-culinary",
  },
];

export default routes;
