import { type App, type Plugin } from "vue";
import * as components from "./components";

export * from "./components";

const install: Plugin = (app: App) => {
  // 安装组件
  for (const component of Object.values(components)) {
    if (component.install) {
      app.use(component)
    }
  }

  return app;
}

export default install;
