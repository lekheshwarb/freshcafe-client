import Component from "@ember/component";
import { get, set, computed } from "@ember/object";

export default Component.extend({
  filter: null,

  updatedOrders: computed("filter", function () {
    let updatedList = this.orders;
    if (this.get("filter") !== null) {
      updatedList = [];
      this.orders.forEach((order) => {
        if (order.status === this.get("filter")) updatedList.push(order);
      });
    }
    return updatedList;
  }),

  actions: {
    changeFilter(type) {
      this.set("filter", type);
    },
  },
});
