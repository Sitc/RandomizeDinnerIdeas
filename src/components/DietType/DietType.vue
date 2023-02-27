<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useDietStore } from "../../stores/diet/index";
import { storeToRefs } from "pinia";
import LegendIndicator from "../../common/LegendIndicator/LegendIndicator.vue";

const props = defineProps({
  mealId: {
    type: String,
    required: true,
  },
});

const dietStore = useDietStore();
const { determineDietType } = dietStore;
const { diet } = storeToRefs(dietStore);

onMounted(() => {
  determineDietType(props.mealId as string);
});

</script>

<template>
  <legend-indicator
    :text-color="diet?.textColor as string"
    :title="diet?.title as string"
    :indicator-color="diet?.indicatorColor as string"
  />
</template>