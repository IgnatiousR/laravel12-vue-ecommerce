<script setup>
</script>

<template>
  <div class="w-[200px] bg-violet-700 text-neutral-100 py-4 px-2 transition-all">
    <img class="h-8 mb-2" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white" alt="Your Company" />

    <router-link :to="{name: 'app.dashboard'}" class=" flex items-center gap-2 hover:bg-black/30 p-2 rounded transition-colors">
      <span><HomeIcon class="w-5"/></span>
      <span class=" font-semibold">Dashboard</span>
    </router-link>

    <router-link :to="{name: 'app.products'}" class=" flex items-center gap-2 hover:bg-black/30 p-2 rounded transition-colors">
      <span><Bars4Icon class="w-5"/></span>
      <span class=" font-semibold">Products</span>
    </router-link>
    <router-link :to="{name: 'app.users'}" class=" flex items-center gap-2 hover:bg-black/30 p-2 rounded transition-colors">
      <span><UsersIcon class="w-5"/></span>
      <span class=" font-semibold">Users</span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class=" flex items-center gap-2 hover:bg-black/30 p-2 rounded transition-colors">
      <span><ChartBarIcon class="w-5"/></span>
      <span class=" font-semibold">Reports</span>
    </router-link>
  </div>
</template>

<script setup>
import { HomeIcon, UsersIcon, Bars4Icon, ChartBarIcon } from  '@heroicons/vue/24/outline';
</script>
