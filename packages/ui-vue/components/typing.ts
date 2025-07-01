import type { Plugin, PropType } from "vue";

export type Size = "small" | "default" | "large";

export const componentProps = {
  prefixCls: { type: String },

  size: { type: String as PropType<Size>, default: "default" }
}

export interface ComponentProps {
  prefixCls?: string;

  size?: Size;
}

export type WithPlugin<T> = T & Plugin;
