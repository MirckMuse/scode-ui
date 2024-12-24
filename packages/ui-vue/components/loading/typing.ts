import type { VNode } from "vue";
import type { ComponentProps } from "../typing";

export type IndicatorRender = () => VNode;

export type TipRender = () => VNode;

export interface LoadingProps extends ComponentProps {
  // 是否开启加载状态
  loading?: boolean;

  // 包装的类属性
  wrapperClassName?: string;

  // 加载指示符
  indicator?: VNode | IndicatorRender;

  // 延迟显示加载效果（防止闪烁）
  delay?: number;

  tip?: number | string | VNode | TipRender;
}

export interface LoadingSlots {
  indicator?: IndicatorRender;

  default?: () => VNode;

  tip?: TipRender;
}