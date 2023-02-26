<template>
  <h1 class="text-2xl font-bold mb-4" :class="colorClass">
    {{ title }}
  </h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "text-black",
    },
  },
  computed: {
    colorClass() {
      return this.color;
    },
  },
});
</script>
