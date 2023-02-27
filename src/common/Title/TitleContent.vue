<template>
  <h1
    class="font-bold sm:mb-2 md:mb-4 text-md sm:text-2xl md:text-3xl"
    :class="color"
  >
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
