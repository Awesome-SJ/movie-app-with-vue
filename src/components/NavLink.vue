<template>
    <AppLink
      v-bind="$attrs"
      class="py-2 my-6 mx-10 text-white"
      active-class="border-b-4 border-red-400 focus:border-b-red-400 focus:border-b-4"
      inactive-class="hover:border-b-4 hover:border-white hover:scale-110 transition duration-150 ease-in-out"
    >
      <slot />
    </AppLink>
  </template>

  <script setup>

</script>