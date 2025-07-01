import type { ComponentProps } from "../typing";

export type RawValue = string | number | boolean;

export type Label = RawValue;

export type Option = Record<string, unknown> & {
  value: RawValue;

  label?: Label;

  title?: Label;

  disabled?: boolean;
}

export interface SelectProps extends ComponentProps {
  value: RawValue | RawValue[];

  options?: Option[];

  enableArrow?: boolean;

  enableSearch?: boolean;
}