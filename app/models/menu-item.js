import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  isOutOfStock: DS.attr("boolean"),
  productionCost: DS.attr("number"),
  menuCategoryId: DS.attr("number"),
  createdAt: DS.attr("date", { readOnly: true }),
  updatedAt: DS.attr("date", { readOnly: true }),
});
