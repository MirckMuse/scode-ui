import type { ExtractPropTypes, PropType } from "vue";
import { componentProps } from "../typing"

export const dropdownProps = {
  ...componentProps,

  prefixCls: { type: String, default: 's-dropdown' },

  getPopupContainer: { type: Function as PropType<(trigger: HTMLElement) => HTMLElement>, default: () => document.body }
}

export const dropdownButtonProps = {
  ...componentProps
}

export type DropdownProps = Partial<ExtractPropTypes<typeof dropdownProps>>;

export type DropdownButtonProps = Partial<ExtractPropTypes<typeof dropdownButtonProps>>;
