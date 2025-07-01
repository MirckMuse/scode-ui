<script lang="ts">
import { usePopover } from "../hooks";
import { defineComponent, h } from "vue";


export default defineComponent({
  name: "SPopover",

  props: {
    prefixCls: { type: String, default: "s-popover" }
  },

  setup(props, { slots }) {
    const { popoverId, onHide, onShow, open, triggerRef, overlayRef } = usePopover();

    return () => {

      const overlay = h('div', { popover: "manual" })

      return [
        slots['default']?.(),


      ]
    }
  }
})
</script>