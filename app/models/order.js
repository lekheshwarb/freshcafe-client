import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  user: DS.attr("string"),
  deliveredAt: DS.attr("date"),
  status: DS.attr("string"),
  instructions: DS.attr("string"),
  createdAt: DS.attr("date", { readOnly: true }),
  updatedAt: DS.attr("date", { readOnly: true }),
});
