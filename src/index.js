import List from "./pages/List";
import Profile from "./pages/Profile";
import NewTeacher from "./pages/NewTeacher";

const routes = {
  "/list": List,
  "/profile": Profile,
  "/newteacher": NewTeacher
};

window.addEventListener("hashchange", (event) => {
  const currentRoute = event.newURL.split("#")[1];

  if (currentRoute) {
    return routes[currentRoute]();
  } else {
    List();
  }
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