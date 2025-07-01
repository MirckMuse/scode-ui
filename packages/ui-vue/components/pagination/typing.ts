import type { VNode } from "vue";
import type { ComponentProps } from "../typing";

type PaginationItemType = "page" | "prev" | "next";

type PaginationItemRender = (type: PaginationItemType, page?: number) => VNode;

type TotalRender = (total: number) => VNode;

export interface PaginationProps extends ComponentProps {
  current: number;

  pageSize: number;

  pageSizeOptions?: number[];

  defaultPageSize: number;

  total: number;

  disabled: boolean;

  responsive: boolean;

  simple?: boolean;

  enableLessItems?: boolean;

  enableSizeJumper?: boolean;

  enableSizeSelect?: boolean | ((total: number) => boolean);

  // 渲染函数
  itemRender?: PaginationItemRender;
  totalRender?: TotalRender;

  // 事件
  onChange?: (current: number, pageSize: number) => void;
  "onChange:size"?: (current: number, pageSize: number) => void;
}

export interface PaginationEmits {
  (e: "change", current: number, pageSize: number): void
  (e: "change:size", current: number, pageSize: number): void
  (e: "update:current", current: number): void
  (e: "update:pageSize", pageSize: number): void
}