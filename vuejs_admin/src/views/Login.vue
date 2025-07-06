<template>
    <GuestLayout title="Login to your account">
        <form class="space-y-6" method="POST" @submit.prevent="login">
            <div class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
                {{ errorMsg }}
                <span @click="errorMsg = ''" 
                class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-black/20"
                >
                <XMarkIcon class="w-5"/>
                </span>
            </div>
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                    <input type="email" name="email" id="email" autocomplete="email" required="" v-model="user.email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div class="text-sm">
                    <router-link :to="{name:'requestPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
                    </div>
                </div>
                <div class="mt-2">
                    <input type="password" name="password" id="password" autocomplete="current-password" required="" v-model="user.password"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
            <div class="relative">
      <input type="checkbox" class="sr-only peer">
      <div class="w-6 h-6 bg-gray-700 rounded-md peer-checked:bg-blue-600 transition-all duration-300"></div>
      <svg class="absolute w-4 h-4 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
            <div class="mt-2 flex items-center justify-between">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Remember me</label>
                <input type="checkbox" name="remember-me" id="remember-me" required="" v-model="user.remember"
                class="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded-full" />
            </div>

            <div>
                <button type="submit" :disabled="loading" 
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :class="{
                    'cursor-not-allowed': loading,
                    'hover:bg-indigo-500': loading,
                }"
                >
                <svg v-if="loading" class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Login</button>
            </div>

        </form>
        <p class="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            {{ ' ' }}
            <router-link :to="{name:'register'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Register</router-link>
        </p>
    </GuestLayout>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import GuestLayout from '../components/GuestLayout.vue';
import store from "../store";
// import router from "../router";
import { useRouter } from 'vue-router';

const router = useRouter()

let loading = ref(false);
let errorMsg = ref("");

const user = {
    email: '',
    password: '',
    remember: false
}

function login(){
    loading.value = true;
    store.dispatch('login', user)
    .then(() => {
        loading.value = false;
        router.push({ name: 'app.dashboard'})
    })
    .catch(({response}) => {
        loading.value = false;
        errorMsg.value = response.data.message;
    })
}
</script>
