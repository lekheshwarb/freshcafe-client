import DS from "ember-data";
import ActiveModelAdapter from "active-model-adapter";

export default ActiveModelAdapter.extend({
  host: "http://localhost:3000/",
});
