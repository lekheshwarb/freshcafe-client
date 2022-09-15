import Route from "@ember/routing/route";

// var categories = [
//   {
//     id: 1,
//     name: "Breakfast",
//     created_at: "2022-09-04T14:54:42.983Z",
//     updated_at: "2022-09-04T14:54:42.983Z",
//   },
//   {
//     id: 2,
//     name: "Lunch",
//     created_at: "2022-09-05T04:45:04.428Z",
//     updated_at: "2022-09-05T05:12:53.611Z",
//   },
//   {
//     id: 3,
//     name: "Beverages",
//     created_at: "2022-09-05T12:11:11.810Z",
//     updated_at: "2022-09-05T12:11:31.284Z",
//   },
//   {
//     id: 4,
//     name: "test",
//     created_at: "2022-09-05T13:33:31.411Z",
//     updated_at: "2022-09-05T13:33:31.411Z",
//   },
// ];

export default Route.extend({
  model() {
    return this.get("store").findAll("menu_category");
  },
});
