
<div id="app" class="flex justify-center items-center h-screen">
    <!-- First Column (Carousel - Hidden on Small Screens) -->
    <div class="hidden sm:block sm:w-1/2 p-8">
      <!-- Carousel Content goes here -->
      <div class="carousel">
        <!-- Carousel items go here -->
        <div class="carousel-item">
          <h2 class="text-2xl font-semibold mb-4">Slide 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="carousel-item">
          <h2 class="text-2xl font-semibold mb-4">Slide 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="carousel-item">
          <h2 class="text-2xl font-semibold mb-4">Slide 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>

    <!-- Second Column (Login Form) -->
    <div class="w-full sm:w-1/2 p-8">
      <!-- Login Form Content goes here -->
      <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <div class="mb-4">
          <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" v-model="email" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <div class="relative">
            <input type="password" id="password" v-model="password" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
            <span v-if="showPassword" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
              <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2 12s3-4 5-4 3 4 5 4 3-4 5-4 3 4 5 4M5 12l2-2M19 12l2-2"></path>
              </svg>
            </span>
          </div>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Login</button>
      </div>
    </div>
  </div>
