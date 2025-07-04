<template>
    <div class="flex min-h-full">
        <!-- Sidebar -->
        <Siderbar :class="{'-ml-[200px]':!sidebarOpened}"/>

        <div class="flex-1">
            <TopHeader @toggle-sidebar="toggleSidebar"/>

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
import {ref} from 'vue';
import Siderbar from './Siderbar.vue';
import TopHeader from './TopHeader.vue';

const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar(){
    sidebarOpened.value = !sidebarOpened.value
}
</script>

<style scoped>
</style>
