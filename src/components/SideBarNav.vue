<template>
    <div class="flex z-40 items-center w-[120px] h-screen bg-black relative">
        <div>
            <NavLink :to="{ name: 'home' }"
                class=" grid place-items-center">
                <Icon icon="mdi:home" height="30" color="#fff" />
            </NavLink>
            <NavLink :to="{ name: 'search' }"
                class=" grid place-items-center">
                <Icon icon="mdi:search" height="30" color="#fff" />
            </NavLink>
            <NavLink :to="{ name: 'movie' }"
                class=" grid place-items-center">
                <Icon icon="mdi:movie" height="30" color="#fff" />
            </NavLink>

        </div>


    </div>
</template>

<script setup>
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import NavLink from "./NavLink.vue";









</script>

<style lang="scss"></style>