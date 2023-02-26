<script setup lang="ts">
import { Meal } from '../../common/types/meal';
import { getIngredientsWithMeasure } from '../../utils/getIngredientsWithMeasure';
import { computed } from 'vue';

const props = defineProps<{
  meal: Meal;
}>();

const ingredientsWithMeasure = computed(() => {
  return props.meal
    ? getIngredientsWithMeasure(props.meal)
    : null;
});

</script>

<template>
  <p class="mt-4 text-gray-700 text-base">
    <table class="table-auto w-full">
      <div v-for="item in ingredientsWithMeasure">
        <tr>
          <span class="font-medium">{{item.ingredient}}:</span>
          <span class="text-gray-500 ml-2">{{item.measure}}</span>
        </tr>
      </div>
    </table>
  </p>
</template>