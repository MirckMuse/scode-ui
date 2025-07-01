import type { App } from "vue";
import type { WithPlugin } from "../typing"

import Loading from "./Loading.vue";
import { Override, type IOverride } from "./override";

Loading['install'] = function (app: App) {
  app.component(Loading.name!, Loading);
  return app;
}

Loading["override"] = Override;

// TODO: 通过脚本开启loading

export default Loading as WithPlugin<typeof Loading> & { override: Partial<IOverride> };
