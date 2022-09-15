import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("menu", { path: "/menu_categories" });
  this.route("orders");
  this.route("cart");
  this.route("users");
  this.route("reports");
});

export default Router;
