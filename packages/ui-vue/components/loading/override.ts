import type { IndicatorRender } from "./typing"
import type { VNode } from "vue";
import Loading from "./Loading.vue";
import Indicator from "./Indicator.vue";
import { h } from "vue";

export interface IOverride {
  indicator: VNode | IndicatorRender;
}

export const Override: IOverride = {
  indicator: () => h(Indicator)
}

export function useOverride() {
  const override: IOverride = Object.assign({}, Override, Loading['override'] || {});

  return { override }
}