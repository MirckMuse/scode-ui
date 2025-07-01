import type { App } from "vue";
import type { WithPlugin } from "../typing";

Select["install"] = function (app: App) {
  app.component(Select.name!, Select);
  return app;
}

Select["Option"] = SelectOption;

export default Select as WithPlugin<typeof Select> & {
  Option: typeof SelectOption
};
