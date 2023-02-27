<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const isNotHome = () => {
  return router.currentRoute.value.path !== '/';
};

</script>
<template>
  <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link
        v-if="isNotHome()"
        to="/"
      >
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">&#8592;</span>
      </router-link>
      <div
        id="navbar-sticky"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>