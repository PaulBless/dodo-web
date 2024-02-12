<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>


        <!-- trial heading -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 pt-10 text-center lg:pt-10 product-banner">
          <h1 class="mx-auto max-w-1xl font-display text-2xl font-semibold tracking-tight sm:text-5xl py-5 leading-5">
            <span class="relative whitespace-wrap ">
              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 ">
                Flexible Plans for Every Communication Need: Explore Our Pricing Options.
              </span>
            </span>
          </h1>
        </div>
        <!-- end trial -->


        <!-- pricing component -->
        <div id="pc-top" class="relative mx-auto max-w-7xl mb-20 px-2 z-10 overflow-x-auto rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="w-full overflow-x-auto">
            <table class="table-auto">
              
              <thead>
                <tr>
                  <!-- free trial -->
                  <!-- <th class="w-1/4 min-w-[200px] px-5 inline-block"> -->
                  <th class="w-1/4 min-w-[200px] px-5 absolute block">
                    <div class="mb-10 text-left">
                      <span class="dodo-subtitle mb-3.5 block pt-0 text-xl font-bold dark:text-white">
                        Free Trial
                      </span>

                      <p class="mb-10 text-sm">
                        For teams and organizations who are want a taste of the Dodo experience. 
                      </p>
                      <!-- price -->
                      <h4 class="py-6 ">
                        <span class="dodo-subtitle text-[20px] font-bold dark:text-white lg:text-[20px]">Free</span>
                      </h4>
                      <!-- button -->
                      <a href="/start-trial" class="block max-w-40 btn-dodo p-3 mb-10 text-center font-medium text-white transition hover:bg-opacity-90">
                        Get Started
                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_390_496)">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_390_496">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                      </a>
                      <!-- list -->
                      <ul class="space-y-4">
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                      </ul>
                    </div>
                  </th>

                  <!-- standard -->
                  <th class="w-1/4 min-w-[200px] px-5 static">
                    <div class="mb-10 text-left">
                      <span class="dodo-subtitle mb-3.5 block text-xl font-bold dark:text-white">
                        Standard
                      </span>

                      <p class="mb-4 text-sm">
                        For small teams and organizations who are just starting out, and need basic features for regular use
                        <br/>
                        <small class="mt-6">PSTN - $1/user/month</small>
                      </p>
                      <!-- price -->
                      <h4 class="mb-6">
                        <span class="dodo-subtitle text-[20px] font-bold dark:text-white lg:text-[20px]">$1.99 / Month/ User</span>
                      </h4>
                      <!-- button -->
                      <a href="/" class="block max-w-40 btn-dodo p-3 mb-10 text-center font-medium text-white transition hover:bg-opacity-90">
                        Get Started
                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_390_496)">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_390_496">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                      </a>
                      <!-- list -->
                      <ul class="space-y-4">
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                      </ul>
                    </div>
                  </th>

                  <!-- premium -->
                  <th class="w-1/4 min-w-[200px] px-5 static">
                    <div class="mb-10 text-left">
                      <span class="dodo-subtitle mb-3.5 block text-xl font-bold dark:text-white">
                        Premium
                      </span>
                      <!-- info -->
                      <p class="mb-4 text-sm">
                        For large sized teams and organizations who want to increase productivity, and keep your teams connected.
                        <br/>
                        <small class="mt-6">PSTN - $1/user/month</small>
                      </p>
                      <!-- price -->
                      <h4 class="mb-6">
                        <span class="dodo-subtitle text-[20px] font-bold dark:text-white lg:text-[20px]">$4.99 / Month/ User</span>
                      </h4>
                      <!-- button -->
                      <a href="/" class="block max-w-40 btn-dodo p-3 mb-10 text-center font-medium text-white transition hover:bg-opacity-90">
                        Get Started
                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_390_496)">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_390_496">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                      </a>
                      <!-- list -->
                      <ul class="space-y-4">
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                      </ul>
                    </div>
                  </th>
  
                  <!-- enterprise -->
                  <th class="w-1/4 min-w-[200px] px-5 static">
                    <div class="mb-10 text-left">
                      <span class="dodo-subtitle mb-3.5 block text-xl font-bold dark:text-white">
                        Enterprise
                      </span>
                      <!-- info -->
                      <p class="mb-4 text-sm">
                        For large sized teams and organizations who want to increase productivity, and keep your teams connected.
                        <br/>
                        <small class="mt-6">PSTN - $1/user/month</small>
                      </p>
                      <!-- price -->
                      <h4 class="mb-6">
                        <span class="dodo-subtitle text-[20px] font-bold dark:text-white lg:text-[20px]">$9.99 / Month/ User</span>
                      </h4>
                      <!-- button -->
                      <a href="/" class="block max-w-40 btn-dodo p-3 mb-10 text-center font-medium text-white transition hover:bg-opacity-90">
                        Get Started
                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_390_496)">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_390_496">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                      </a>
                      <!-- list -->
                      <ul class="space-y-4">
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Calls
                          </p>
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="ml-4">
                            Text messaging
                          </p>
                        </li>
                      </ul>
                    </div>
                  </th>

                </tr>
              </thead>

            </table>
          </div>
          
        </div>

        <!-- <h1 class=" text-2xl font-bold leading-tight text-black sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight xl:text-[40px] xl:leading-tight">TailAdmin - Free Tailwind CSS Dashboard Admin Template</h1> -->

        <!-- pricing content -->
        <div class="relative mx-auto max-w-7xl mb-48 px-4 z-10 overflow-x-auto shadow-default round-sm p-8">
            <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-md text-gray-700 d dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Standard
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Premium
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Enterprise
                        </th>
                        
                    </tr>
                </thead>
                <tbody class="">
                    <tr class="bg-white ">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           <p>Calls</p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white ">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <p>Group Name, Group logo, Admin name</p>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Text Messaging</p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Set extension to busy</p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Search</p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>100GB Storage - Upgradable</p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white text-wrap dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">Multimedia attachment and File sharing features - document, gallery </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>1TB Storage - Upgradable </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Conferencing </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Voicemail </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Sub-Groups </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4 leading-7">
                           <p>Group Chat </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                      </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                            Multimedia attachment and File sharing features - <br/>
                            document, Gallery, Location, contact book, audio file and video file. 
                          </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                            Online presence- Display the user status with an app <br/>
                             like Online & Last seen with time/date.                           
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                            Voice notes sharing                            
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                            Location sharing                            
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                            Chat acknowledgement Indicators- Grey <br/>
                            (Message sent to receiver server), <br/>
                             Orange (Delivered)and Green (Seen)                          
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                              Unlimited Storage                         
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 leading-7">
                           <p class="text-wrap">
                              PSTN Extension Diversion                         
                            </p> 
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                        <td class="px-6 py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_97_30982)">
                              <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_97_30982">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <!-- latest -->
        <div class="relative hidden overflow-x-auto mb-48 px-4 p-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 rounded-s-lg">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" class="px-6 py-3 rounded-e-lg">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                          1
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


      </main>
  
      <Footer />
  
      <!-- Back to top -->
      <div class="back-top"></div>
    </div>
  </template>
  
  <script setup >
  import Header from "../components/Header.vue";
  import CallToAction from "../components/FreeTrial.vue";
  import Footer from "../components/Footer.vue";
 
  </script>
  
  <style scoped>
 #pc-top{
  border-top: 5px solid var(--dodo-brand, #00F) !important;
  box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.08);
 }
  .product-banner{
    /* background-image: url('../assets/img/circle-bg.png');
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 90%; */
  }

  .product-one.content{
    margin: 0;
    display: flex;
    place-items: center;
  }
  </style>
  