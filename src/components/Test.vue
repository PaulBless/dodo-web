<template>
    <div>
        <!-- signup -->
        <div class="flex justify-center items-center h-screen">
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

        <!-- table -->
        <!-- tester -->
        <div class="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
            <div class="card">
                <div class="card-body">
                    <div class="flex flex-row justify-between items-center">
                        <h1 class="font-extrabold text-lg">best sellers</h1>
                        <a href="#" class="btn-gray text-sm">view all</a>
                    </div>

                    <table class="table-auto w-full mt-5 text-right">
                        <thead>
                            <tr>
                                <td class="py-4 font-extrabold text-sm text-left">product</td>
                                <td class="py-4 font-extrabold text-sm">price</td>
                                <td class="py-4 font-extrabold text-sm">sold</td>
                                <td class="py-4 font-extrabold text-sm">profit</td>
                            </tr>
                        </thead>

                        <tbody>
                            <!-- item -->
                            <tr class="">
                                <td class="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                                    <div class="w-8 h-8 overflow-hidden mr-3">
                                        <img src="" class="object-cover" />
                                    </div>
                                    Sneakers and Tennis
                                </td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-2">18</span></td>
                                <td class="py-4 text-xs text-gray-600"><span class="num-3">670</span></td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-4">3519</span></td>
                            </tr>
                            <!-- end item -->

                            <!-- item -->
                            <tr class="">
                                <td class="py-4 text-sm text-gray-600 flex flex-row items-center">
                                    <div class="w-8 h-8 overflow-hidden mr-3">
                                        <img src="" class="object-cover" />
                                    </div>
                                    Crazy Socks &amp; Graphic Socks for Men
                                </td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-2">12</span></td>
                                <td class="py-4 text-xs text-gray-600"><span class="num-3">469</span></td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-4">2934</span></td>
                            </tr>
                            <!-- end item -->

                            <!-- item -->
                            <tr class="">
                                <td class="py-4 text-sm text-gray-600 flex flex-row items-center">
                                    <div class="w-8 h-8 overflow-hidden mr-3">
                                        <img src="" class="object-cover" />
                                    </div>
                                    Adidas Soccer Ball
                                </td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-2">79</span></td>
                                <td class="py-4 text-xs text-gray-600"><span class="num-3">328</span></td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-4">1871</span></td>
                            </tr>
                            <!-- end item -->

                            <!-- item -->
                            <tr class="">
                                <td class="py-4 text-sm text-gray-600 flex flex-row items-center">
                                    <div class="w-8 h-8 overflow-hidden mr-3">
                                        <img src="" class="object-cover" />
                                    </div>
                                    Best Chocolate Chip Cookies
                                </td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-2">16</span></td>
                                <td class="py-4 text-xs text-gray-600"><span class="num-3">516</span></td>
                                <td class="py-4 text-xs text-gray-600">$ <span class="num-4">7826</span></td>
                            </tr>
                            <!-- end item -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h2 class="font-bold text-lg mb-10">Recent Orders</h2>

                    <!-- start a table -->
                    <table class="table-fixed w-full">
                        <!-- table head -->
                        <thead class="text-left">
                            <tr>
                                <th class="w-1/2 pb-10 text-sm font-extrabold tracking-wide">customer</th>
                                <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Product</th>
                                <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Invoice</th>
                                <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">price</th>
                                <th class="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">status</th>
                            </tr>
                        </thead>
                        <!-- end table head -->

                        <!-- table body -->
                        <tbody class="text-left text-gray-600">
                            <!-- item -->
                            <tr>
                                <!-- name -->
                                <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                    <div class="w-8 h-8 overflow-hidden rounded-full">
                                        <img src="" class="object-cover" />
                                    </div>
                                    <p class="ml-3 name-1">Abdulbasir</p>
                                </th>
                                <!-- name -->

                                <!-- product -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                                <!-- product -->

                                <!-- invoice -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4">6074</span></th>
                                <!-- invoice -->

                                <!-- price -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2">88</span></th>
                                <!-- price -->

                                <!-- status -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                                <!-- status -->
                            </tr>
                            <!-- item -->

                            <!-- item -->
                            <tr>
                                <!-- name -->
                                <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                    <div class="w-8 h-8 overflow-hidden rounded-full">
                                        <img src="" class="object-cover" />
                                    </div>
                                    <p class="ml-3 name-1">Enzo</p>
                                </th>
                                <!-- name -->

                                <!-- product -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                                <!-- product -->

                                <!-- invoice -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4">2581</span></th>
                                <!-- invoice -->

                                <!-- price -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2">74</span></th>
                                <!-- price -->

                                <!-- status -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                                <!-- status -->
                            </tr>
                            <!-- item -->

                            <!-- item -->
                            <tr>
                                <!-- name -->
                                <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                    <div class="w-8 h-8 overflow-hidden rounded-full">
                                        <img src="" class="object-cover" />
                                    </div>
                                    <p class="ml-3 name-1">Frank</p>
                                </th>
                                <!-- name -->

                                <!-- product -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                                <!-- product -->

                                <!-- invoice -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4">1847</span></th>
                                <!-- invoice -->

                                <!-- price -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2">16</span></th>
                                <!-- price -->

                                <!-- status -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                                <!-- status -->
                            </tr>
                            <!-- item -->

                            <!-- item -->
                            <tr>
                                <!-- name -->
                                <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                    <div class="w-8 h-8 overflow-hidden rounded-full">
                                        <img src="" class="object-cover" />
                                    </div>
                                    <p class="ml-3 name-1">Baley</p>
                                </th>
                                <!-- name -->

                                <!-- product -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                                <!-- product -->

                                <!-- invoice -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4">5677</span></th>
                                <!-- invoice -->

                                <!-- price -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2">30</span></th>
                                <!-- price -->

                                <!-- status -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                                <!-- status -->
                            </tr>
                            <!-- item -->

                            <!-- item -->
                            <tr>
                                <!-- name -->
                                <th class="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                    <div class="w-8 h-8 overflow-hidden rounded-full">
                                        <img src="" class="object-cover" />
                                    </div>
                                    <p class="ml-3 name-1">Casey</p>
                                </th>
                                <!-- name -->

                                <!-- product -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                                <!-- product -->

                                <!-- invoice -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span class="num-4">1073</span></th>
                                <!-- invoice -->

                                <!-- price -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span class="num-2">62</span></th>
                                <!-- price -->

                                <!-- status -->
                                <th class="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                                <!-- status -->
                            </tr>
                            <!-- item -->
                        </tbody>
                        <!-- end table body -->
                    </table>
                    <!-- end a table -->
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from "vue";
  let email = ref('')
  let password = ref('')
  let showPassword = ref(false)

  const togglePasswordVisibility = () => {
    this.showPassword.value = !this.showPassword;

  }
</script>