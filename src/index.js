import List from "./pages/List";
import Profile from "./pages/Profile";

const routes = {
  "/list": List,
  "/profile": Profile,
};

window.addEventListener("hashchange", (event) => {
  const currentRoute = event.newURL.split("#")[1];

  if (currentRoute) {
    return routes[currentRoute]();
  }

  List();
});

document.addEventListener("DOMContentLoaded", function() {

  const currentRoute = window.location.hash.split("#")[1];

  if (!currentRoute || !routes[currentRoute]) {
    return window
    .location
    .hash = "/list";
  }

  routes[currentRoute]();
});