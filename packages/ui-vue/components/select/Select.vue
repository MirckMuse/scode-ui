<template>
  <div ref="triggerRef" :class="classes" @click="handleTogglePopover" :popovertarget="popoverId">
    <div :class="prefixCls + '-inner'"></div>
    <SelectDown :class="prefixCls + '-icon'" />
  </div>

  <div ref="overlayRef" class="popover-inner" :id="popoverId" popover="manual"
    style="width: 200px;height: 200px;background-color: red;">
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { usePopover } from '../hooks';
import SelectDown from './icon/SelectDown.vue';
import type { SelectProps } from './typing';

defineOptions({
  name: "SSelect"
});

const { popoverId, triggerRef, overlayRef, onHide, onShow, open } = usePopover();

function handleTogglePopover() {
  if (open.value) {
    onHide();
  } else {
    onShow();
  }
}

const props = withDefaults(defineProps<Partial<SelectProps>>(), {
  prefixCls: 's-select'
});

const classes = computed(() => {
  return {
    [props.prefixCls]: true,
  }
});
</script>

<style lang="less" scoped>
.popover-inner {
  margin: 0;
}
</style>