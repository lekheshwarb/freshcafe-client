import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default Component.extend({
  tagName: "",
  store: service(),

  newName: "",

  init() {
    console.log("init of user-modal");
    this._super(...arguments);
    this.set("newName", this.user.name);
    this.set("newEmail", this.user.email);
    this.set("newPhone", this.user.phone);
    this.set("newAddress", this.user.address);
    this.set("newRole", this.user.role);
    this.set("newPassword", this.user.password);
  },

  actions: {
    onSaveEdit() {
      this.get("store")
        .findRecord("user", this.user.id)
        .then(function (user) {
          console.log(this);
          user.role = get(this, newName);
          user.name = newName;
          user.email = newEmail;
          user.phone = newPhone;
          user.address = newAddress;
          user.password = newPassword;
          console.log(user);
          user.save(); // => PATCH to '/posts/1'
        });
    },
  },
});
