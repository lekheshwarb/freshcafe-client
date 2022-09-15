import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    let sum = 0;
    this.orderItems.forEach((orderItem) => {
      sum += orderItem.item_price;
    });
    this.set("totalAmount", sum);
  },
});
