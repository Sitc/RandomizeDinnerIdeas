import { mount } from "@vue/test-utils";
import MealDetails from "../../views/mealDetails.vue";
import { createPinia } from "pinia";
import { useMealStore } from "../../stores/meal";

describe("MealDetails.vue", () => {
  it("renders the meal details", async () => {
    // Create a new pinia instance
    const pinia = createPinia();

    // Mock the `fetchMealById` method
    const fetchMealById = jest.fn();
    useMealStore(pinia).fetchMealById = fetchMealById;

    // Mount the component
    const wrapper = mount(MealDetails, {
      global: {
        plugins: [pinia],
      },
      props: {
        id: "52772",
      },
    });

    // Wait for the `fetchMealById` method to resolve
    await wrapper.vm.$nextTick();

    // Expect the meal details to be rendered
    expect(wrapper.find(".text-red-500").text()).toBe("Spaghetti Carbonara");
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://www.themealdb.com/images/media/meals/wrspqvw1417281598.jpg"
    );
    expect(wrapper.find(".text-gray-700").text()).toBe("Boil spaghetti until al dente...");
    expect(wrapper.find("video-player").exists()).toBe(true);
    expect(wrapper.find("video-player").attributes("url")).toBe(
      "https://www.youtube.com/watch?v=1hX8Ggcbkpg"
    );
  });
});