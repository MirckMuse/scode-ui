<template>
  <div class="s-loading__indicator"></div>
</template>

<script lang="ts" setup></script>

<style scoped>
.s-loading__indicator {
  width: 30px;
  height: 30px;
  border: 2px solid #1677ff;
  border-top-color: transparent;
  border-radius: 100%;

  animation: circle infinite 0.75s linear;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
