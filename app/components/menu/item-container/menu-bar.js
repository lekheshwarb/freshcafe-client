import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),

  newCategoryName: "",

  newItemName: "",
  newItemPrice: "",
  newItemDescription: "",
  newItemProductionCost: "",
  newItemCategoryId: "",

  resetCategoryDetails() {
    this.set("newCategoryName", "");
  },

  resetItemDetails() {
    this.set("newItemName", "");
    this.set("newItemPrice", "");
    this.set("newItemDescription", "");
    this.set("newItemProductionCost", "");
    this.set("newItemCategoryId", "");
  },

  actions: {
    addNewCategory() {
      this.get("store")
        .createRecord("menu-category", {
          name: this.newCategoryName,
        })
        .save()
        .then(this.resetCategoryDetails.bind(this));
    },

    addNewItem() {
      this.get("store")
        .createRecord("menu-item", {
          name: this.newItemName,
          price: this.newItemPrice,
          description: this.newItemDescription,
          productionCost: this.newItemProductionCost,
          menuCategoryId: this.newItemCategoryId,
          isOutOfStock: false,
        })
        .save()
        .then(this.resetItemDetails.bind(this));
    },
  },
});
