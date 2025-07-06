<template>
    <div class="flex min-h-full" >
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
    <!-- <div v-else class="min-h-full bg-neutral-200 flex items-center justify-center">
        <div class="flex flex-col items-center">
            <svg v-if="loading" class="mr-3 -ml-1 size-10 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="mt-2">Please Wait ...</p>
        </div>
    </div> -->
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import Siderbar from './Siderbar.vue';
import Navbar from './Navbar.vue';
import store from '../store';

const currendtUser = computed(() => store.state.user.data)

const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar(){
    sidebarOpened.value = !sidebarOpened.value
}

onMounted(() => {
    store.dispatch('getUser')
    handleSideBarUpdate();
    window.addEventListener('resize', handleSideBarUpdate);
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
