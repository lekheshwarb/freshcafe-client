import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    this.set("isDelivered", this.invoice.status == "delivered");
    let sum = 0;
    this.invoice.items.forEach((orderItem) => {
      sum += orderItem.item_price;
    });
    this.set("totalAmount", sum);
  },
});
