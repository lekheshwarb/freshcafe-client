import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),

  name: "",
  role: "",
  phone: "",
  email: "",
  password: "",
  address: "",

  actions: {
    addNewUser() {
      this.get("store")
        .createRecord("user", {
          name: this.name,
          role: this.role,
          email: this.email,
          phone: this.phone,
          password: this.password,
          address: this.address,
        })
        .save();

      // user.save();
    },
  },
});
