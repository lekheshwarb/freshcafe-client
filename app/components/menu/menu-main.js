import Component from "@ember/component";
import { get, set, computed } from "@ember/object";

export default Component.extend({
  categoryType: null,

  updatedItemList: computed("categoryType", function () {
    let filteredList = this.data.items;
    if (this.get("categoryType") !== null) {
      filteredList = [];
      this.data.items.forEach((item) => {
        if (item.menuCategoryId == this.get("categoryType"))
          filteredList.push(item);
      });
    }
    return filteredList;
  }),

  actions: {
    changeCategoryType(type) {
      this.set("categoryType", type);
    },
  },
});
