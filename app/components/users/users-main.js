import Component from "@ember/component";
import { get, set, computed } from "@ember/object";

export default Component.extend({
  filter: null,

  updatedUsers: computed("filter", function () {
    let updatedList = this.users;
    if (this.get("filter") !== null) {
      updatedList = [];
      this.users.forEach((user) => {
        if (user.role === this.get("filter")) updatedList.push(user);
      });
    }
    console.log(updatedList);
    return updatedList;
  }),

  actions: {
    changeFilter(type) {
      this.set("filter", type);
    },
  },
});
