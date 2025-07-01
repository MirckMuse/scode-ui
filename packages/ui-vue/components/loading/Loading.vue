<script lang="ts">
import type { LoadingProps } from './typing';
import { useOverride } from "./override";
import { defineComponent, h, type VNode, defineProps } from 'vue';
import { isNil } from 'es-toolkit';

defineProps<LoadingProps>();

function _render(target?: Function | VNode | string | number) {
  if (isNil(target)) {
    return null;
  }

  if (typeof target === "function") {
    return target();
  } else if (typeof target === 'object') {
    return h(target);
  }

  return target;
}

export default defineComponent<LoadingProps>({
  name: "SLoading",

  props: ["prefixCls", "size", "loading", "wrapperClassName", "indicator", "delay", "tip"],

  emits: ["default", "indicator", "tip"],

  setup(props, { slots }) {
    const { override } = useOverride();

    // TODO: delay 功能

    return () => {
      const { prefixCls = "s-loading", size = "default", loading, wrapperClassName = '', delay } = props;

      let indicatorWrapper = null;

      if (loading) {
        // 渲染 indicator
        indicatorWrapper = h('div', { class: prefixCls + "-indicator__wrapper" }, [
          _render(props.indicator || slots['indicator'] || override.indicator),
          _render(props.tip || slots["tip"])
        ])
      }

      const classes = {
        [prefixCls]: true,
        [wrapperClassName]: true,
        [prefixCls + '-size__' + size]: true,
        [prefixCls + '-nested']: !!slots['default']
      }

      if (slots['default']) {
        return h('div', { class: classes }, [
          indicatorWrapper,
          slots['default']()
        ])
      }

      return h('div', { class: classes }, [indicatorWrapper])
    }
  }
})
</script>