<template>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Brand Logo -->
      <div>
        <img src="../assets/dodo-logo.png" alt="Logo" class="h-10 w-15">
      </div>

      <!-- Page Links (hidden on small screens) -->
      <div class="hidden md:flex lg:flex space-x-4">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Services</a>
        <!-- Add more links as needed -->
      </div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Login/Signup Buttons (hidden on small screens) -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-white hover:text-gray-300">Login</a>
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</a>
      </div>
    </div>

    <!-- Mobile Menu (visible on small screens) -->
    <div v-if="mobileMenuOpen" class="md:hidden mt-2">
      <a href="#" class="block text-white py-2">Home</a>
      <a href="#" class="block text-white py-2">About</a>
      <a href="#" class="block text-white py-2">Services</a>
      <!-- Add more links as needed -->
      <div class="flex items-center space-x-4 mt-4">
        <a href="#" class="text-white hover:text-gray-300">Login</a>
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Customize styles as needed */
</style>
