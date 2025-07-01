<script lang="ts">
import { defineComponent, Comment, cloneVNode, h } from "vue";
import { type DropdownProps, dropdownProps } from "./typing";
import Overlay from "./overlay.vue";
import { usePopover } from "components/hooks";

export default defineComponent<DropdownProps, {}>({
	emits: ["default", "overlay"],

	props: dropdownProps,

	setup(props, { slots }) {
		return () => {
			const { prefixCls, getPopupContainer } = props;

			const {
				popoverId, triggerRef, overlayRef,
				open, onHide, onShow
			} = usePopover();

			// 重置 trigger 的元素
			const triggerList = slots["default"]?.() ?? [];
			const triggerIndex = triggerList.findIndex((vnode) => vnode.type !== Comment);

			let teleportTo = null;
			if (triggerIndex !== -1) {
				const triggerElement = cloneVNode(triggerList[triggerIndex], {
					class: `${prefixCls}__trigger`,
					ref:triggerRef
				});

				teleportTo = triggerElement?.el as HTMLElement;
				triggerList[triggerIndex] = triggerElement;
			}

			return [
				triggerList,
				h(Overlay, { prefixCls, id: popoverId, ref: overlayRef }, () => slots["overlay"]?.()),
			];
		};
	},
});
</script>
