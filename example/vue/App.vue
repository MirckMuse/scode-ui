<template>
	<div style="padding: 24px;">
		<SLoading v-if="false" :loading="true"></SLoading>

		<SDropdown v-if="false">
			<!-- asdad -->
			<button>Trigger</button>
			<button>Trigger</button>

			<template #overlay>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</template>
		</SDropdown>

		<s-pagination v-model:pageSize="pageSize"></s-pagination>


		<div style="height: 1000px;"></div>
	</div>
</template>

<script lang="ts" setup>
import { Loading as SLoading } from "@scode/ui-vue";
import { Dropdown as SDropdown } from "@scode/ui-vue";
import { ref } from "vue";

const pageSize = ref();
</script>

<style></style>
