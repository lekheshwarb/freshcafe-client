import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  phone: DS.attr("number"),
  role: DS.attr("string"),
  address: DS.attr("string"),
  password: DS.attr("string"),
});
