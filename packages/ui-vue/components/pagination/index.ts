import type { App } from "vue";
import type { WithPlugin } from "../typing";
import Pagination from "./Pagination.vue";

Pagination["install"] = function (app: App) {
  app.component(Pagination.name!, Pagination);
  return app;
}

export default Pagination as WithPlugin<typeof Pagination>;
