<template>
  <ul :class="classes">
    <li>total</li>
    <li>
      <PagePrev></PagePrev>
    </li>
    <li>
      <PageNext></PageNext>
    </li>
    <li :class="prefixCls + '-options'">
      <Select v-model:value="pageSize" :options="_pageSizeOptions"></Select>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, type PropType, useId } from 'vue';
import type { PaginationProps } from './typing';
import PagePrev from "./icon/PagePrev.vue";
import PageNext from "./icon/PageNext.vue";
import Select from "../select";

defineOptions({
  name: "SPagination"
});

console.log(useId())

const props = withDefaults(defineProps<PaginationProps>(), {
  prefixCls: "s-pagination",
  size: 'default',
  defaultPageSize: 10,
  pageSizeOptions: () => [10, 20, 50, 100],
  enableSizeSelect: (total: number) => total > 50
});

const current = defineModel("current", { type: Number });
const pageSize = defineModel("pageSize", { type: [Number, String] as PropType<string | number> });
pageSize.value = props.pageSize ?? props.defaultPageSize ?? 10;

const classes = computed(() => {
  return {
    [props.prefixCls]: true
  }
});

const _pageSizeOptions = computed(() => {
  return props.pageSizeOptions.map(value => ({ value: String(value), label: `${value} 条/页` }));
});
</script>
