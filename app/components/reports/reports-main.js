import Component from "@ember/component";
import { get, set, computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  userFilter: null,
  dateFrom: null,
  dateTo: null,

  // filterdInvoices: computed(
  //   userFilter,
  //   dateFromFilter,
  //   dateToFilter,
  //   function () {
  //     return invoices;
  //   }
  // ),

  init() {
    this._super(...arguments);
    this.set("usersList", this.get("store").findAll("user"));
  },

  updatedInvoices: computed("userFilter", "dateFrom", "dateTo", function () {
    let invoices = this.allInvoices;

    if (this.get("userFilter") != null) {
      let temp = [];
      invoices.forEach((invoice) => {
        if (invoice.user == this.get("userFilter")) temp.push(invoice);
      });
      invoices = temp;
    }
    if (this.get("dateFrom") != null) {
      let temp = [];
      invoices.forEach((invoice) => {
        if (invoice.createdAt >= this.get("dateFrom")[0]) temp.push(invoice);
      });
      invoices = temp;
    }
    if (this.get("dateTo") != null) {
      let temp = [];
      invoices.forEach((invoice) => {
        if (invoice.createdAt <= this.get("dateTo")[0]) temp.push(invoice);
      });
      invoices = temp;
    }
    return invoices;
  }),

  actions: {
    changeFromDate(newDate) {
      this.set("dateFrom", newDate);
      console.log(dateFrom);
    },

    changeToDate(newDate) {
      this.set("dateTo", newDate);
    },

    changeUser(newUser) {
      this.set("user", newUser);
    },
  },
});
