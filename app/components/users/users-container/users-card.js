import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  // init() {
  //   this._super(...arguments);
  //   this.set("id", this.user.id);
  //   this.set("name", this.user.name);
  //   this.set("email", this.user.email);
  //   this.set("phone", this.user.phone);
  //   this.set("address", this.user.address);
  //   this.set("role", this.user.role);
  // },
});
