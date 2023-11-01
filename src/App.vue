<template>
    <div class="fixed w-full h-screen bg-black">
        <nav>
            <SideBarNav></SideBarNav>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import SideBarNav from './components/SideBarNav.vue';


</script>