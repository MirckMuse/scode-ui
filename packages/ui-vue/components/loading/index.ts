import type { App, Plugin } from "vue";
import Loading from "./Loading.vue";
import { Override, type IOverride } from "./override";

Loading['install'] = function (app: App) {
  app.component(Loading.name!, Loading);
  return app;
}

Loading["override"] = Override;

type LoadingComponent = typeof Loading & Plugin & { override: Partial<IOverride> };


// TODO: 通过脚本开启loading

export default Loading as LoadingComponent;
