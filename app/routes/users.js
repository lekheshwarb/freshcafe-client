import Route from "@ember/routing/route";

export default Route.extend({
  type: "clerk",

  model() {
    return this.get("store").findAll("user");
  },

  actions: {
    changeType(newType) {
      this.type = newType;
      console.log(this.type);
    },
  },
});
