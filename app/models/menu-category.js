import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  createdAt: DS.attr("date", { readOnly: true }),
  updatedAt: DS.attr("date", { readOnly: true }),
});
