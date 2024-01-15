<template>
    <nav
      class="p-3 border-gray-200 rounded bg-green-100 dark:bg-gray-800 dark:border-gray-700">
      <div class="container-fluid flex flex-wrap items-center justify-between mx-auto">
        <p class="flex items-center hover:underline">
          <img src="" class="h-6 mr-5 sm:h-10 invisible" />
          <span
            class="self-center hover:text-green-700 text-xl font-semibold whitespace-nowrap dark:text-white">
            <a href="/" class="">Dodo </a>
          </span>
        </p>
  
        <div class="hidden w-full md:block md:w-auto">
          <ul
            class="flex flex-col mt-4 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <router-link
                to="/"
                class="flex items-center hover:text-green-700 hover:underline bg-green-50 p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                aria-current="page">
                <span class="flex-1 ml-2 whitespace-nowrap">Products</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="flex items-center hover:text-green-700 hover:underline p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                aria-current="page">
                <span class="flex-1 ml-2 whitespace-nowrap">Features</span>
              </router-link>
            </li>
            
            <li>
              <router-link
                to="/about"
                class="flex items-center p-2 ml-2 hover:text-green-700 hover:underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                aria-current="page">
                <span class="flex-1 ml-2 whitespace-nowrap">Industries</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/pricing"
                class="flex items-center p-2 ml-2 hover:text-green-700 hover:underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                aria-current="page">
                <span class="flex-1 ml-2 whitespace-nowrap">Pricing</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="flex items-center p-2 ml-2 hover:text-green-700 hover:underline text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                aria-current="page">
                <span class="flex-1 ml-2 whitespace-nowrap">Contact</span>
              </router-link>
            </li>
            
  
            <!-- Auth links item -->
            
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        active: 0,
        logo: '../assets/dev.png',
      };
    },
    methods: {
      inActive() {
        this.active += 1;
      },
    },
  };
  </script>
  
  <style>
  .tester-color{
    color: #123456;
  }
  .fade-nav-enter-active,
  .fade-nav-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-nav-enter-from,
  .fade-nav-leave-to {
    opacity: 0;
  }
  
  .vue-school-active-link {
    /* background-color: rgb(225, 255, 228); */
    padding: 5px 12px;
    border-radius: 10px;
    text-decoration: underline;
  }
  </style>
  