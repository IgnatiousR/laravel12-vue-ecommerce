<template>
<GuestLayout title="Set new password">
    <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="password" class="block text-sm/6 font-medium text-gray-900">New Password</label>
          <div class="mt-2">
            <input type="password" name="password" id="password" placeholder="New Password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password-repeat" class="block text-sm/6 font-medium text-gray-900">Repeat Password</label>
          </div>
          <div class="mt-2">
            <input type="password" name="password_repeat" placeholder="Repeat Password" id="password-repeat" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <router-link :to="{name:'login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Go back to Login</router-link>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Submit</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Don't have an account?
        {{ ' ' }}
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
      </p>
</GuestLayout>
</template>


<script setup>
import GuestLayout from '../components/GuestLayout.vue';
</script>
