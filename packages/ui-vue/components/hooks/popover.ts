import { autoUpdate, computePosition, flip } from "@floating-ui/dom";
import { ref, shallowRef, useId } from "vue";

export type Option<T> = T | null;

export function usePopover() {
  const open = ref(false);
  const triggerRef = shallowRef<HTMLElement>();
  const overlayRef = shallowRef<HTMLElement>();
  const popoverId = useId();

  let cleanup: Option<() => void> = null

  function updateOverflowPosition() {
    if (!triggerRef.value || !overlayRef.value) return false;

    computePosition(triggerRef.value, overlayRef.value, {
      placement: "top-start",
      strategy: "fixed",
      middleware: [
        flip(),
      ]
    }).then((position) => {
      if (!overlayRef.value) return;

      Object.assign(overlayRef.value.style, { left: `${position.x}px`, top: `${position.y}px` });
    })
  }

  // 显示 popover
  function onShow() {
    // TODO: 需要考虑组件延后渲染的场景
    open.value = true;
    overlayRef.value?.showPopover();

    if (!triggerRef.value || !overlayRef.value) return false;

    cleanup = autoUpdate(triggerRef.value, overlayRef.value, updateOverflowPosition)
  }


  // 隐藏 popover
  function onHide() {
    open.value = false;
    overlayRef?.value?.hidePopover();
    cleanup?.();
    cleanup = null;
  }

  return {
    popoverId,

    triggerRef, overlayRef,

    open, onShow, onHide
  }
}