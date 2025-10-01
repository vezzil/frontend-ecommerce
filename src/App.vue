<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img alt="Vue logo" class="h-12 w-auto" src="@/assets/logo.svg" />
            <h1 class="ml-4 text-2xl font-bold text-gray-900">Vue 3 + Tailwind CSS</h1>
          </div>
          
          <nav class="flex space-x-4">
            <RouterLink 
              to="/" 
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              active-class="bg-gray-100 text-gray-900"
              exact
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/about" 
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              active-class="bg-gray-100 text-gray-900"
            >
              About
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* All styling is handled by Tailwind CSS */
</style>
