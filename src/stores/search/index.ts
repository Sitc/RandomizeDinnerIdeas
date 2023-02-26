import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const searchQuery = ref<string | undefined>(undefined);

  return {
    searchQuery,
  };
});
