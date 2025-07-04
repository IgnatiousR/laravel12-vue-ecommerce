<template>
    <div class="flex min-h-full">
        <!-- Sidebar -->
        <Siderbar :class="{'-ml-[200px]':!sidebarOpened}"/>

        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar"/>

            <!-- Content -->
            <main class="p-5">
                <div class="p-4 rounded bg-white">
                    <router-view></router-view>
                </div>
            </main>
        </div>

    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import Siderbar from './Siderbar.vue';
import Navbar from './Navbar.vue';

const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar(){
    sidebarOpened.value = !sidebarOpened.value
}

onMounted(() => {
    handleSideBarUpdate()
    window.addEventListener('resize', handleSideBarUpdate)
})

onUnmounted(() =>{
    window.removeEventListener('resize', handleSideBarUpdate)
})

function handleSideBarUpdate(){
    // if(window.outerWidth <= 768){ sidebarOpened.value = false }
    sidebarOpened.value = window.outerWidth > 768;
}
</script>

<style scoped>
</style>
