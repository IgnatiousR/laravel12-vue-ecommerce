<script setup>
</script>

<template>
    <header class="h-14 flex justify-between items-center p-4 shadow-sm bg-white">
        <button @click="$emit('toggle-sidebar')" class="items-center hover:bg-black/10 cursor-pointer rounded transition-colors p-1">
            <Bars3Icon class="w-6"/>
        </button>

        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                class="inline-flex w-full gap-2 items-center rounded-full cursor-pointer text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                <img src="C:\xampp\htdocs\laravel12_vue_ecommerce\vuejs_admin\public\user.jpg" class="w-10 rounded-full">
                John Doe
                <ChevronDownIcon class=" h-5 w-5 text-neutral-400"/>
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        <UserIcon class="w-5 mr-2" aria-hidden="true"/>
                        Profile
                    </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        <ArrowLeftEndOnRectangleIcon class="w-5 mr-2"/>
                        Logout
                    </button>
                    </MenuItem>
                </div>
                <!-- <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        <ArchiveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                        />
                        Archive
                    </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button
                        :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                    >
                        <MoveIcon
                        :active="active"
                        class="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                        />
                        Move
                    </button>
                    </MenuItem>
                </div> -->
                </MenuItems>
            </transition>
        </Menu>
    </header>
</template>

<script setup>
import { Bars3Icon, ArrowLeftEndOnRectangleIcon, UserIcon } from  '@heroicons/vue/24/outline';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

const emit = defineEmits(['toggle-sidebar'])
</script>
