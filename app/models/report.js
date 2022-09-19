import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  user: DS.attr("string"),
  status: DS.attr("string"),
  items: DS.attr(),
  createdAt: DS.attr("date", { readOnly: true }),
});
