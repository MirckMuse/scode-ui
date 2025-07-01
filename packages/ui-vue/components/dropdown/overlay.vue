<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>

</template>

<script lang="ts" setup>
import type { ComponentProps } from "../typing";

interface OverlayProps extends ComponentProps {
}

withDefaults(defineProps<OverlayProps>(), {
});
</script>
