import type { App } from "vue";
import type { WithPlugin } from "../typing";
import Dropdown from "./dropdown.vue";
import DropdownButton from "./dropdown-button.vue";
import type { DropdownProps } from "./typing";

Dropdown["Button"] = DropdownButton;

Dropdown["install"] = function (app: App) {
  app.component(Dropdown.name!, Dropdown);
  app.component(DropdownButton.name!, DropdownButton);
  return app;
}

export { DropdownButton, type DropdownProps }

export default Dropdown as WithPlugin<typeof Dropdown> & {
  readonly Button: typeof DropdownButton
};
