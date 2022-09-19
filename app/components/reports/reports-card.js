import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    let sum = 0;
    this.invoice.items.forEach((orderItem) => {
      sum += orderItem.item_price;
    });
    this.set("totalAmount", sum);
  },
});
