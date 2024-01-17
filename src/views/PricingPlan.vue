<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>


        <!-- trial -->
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
        <div id="pc-top" class="relative mx-auto max-w-7xl mb-20 px-2 z-10 overflow-hidden rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="w-full overflow-x-auto">
            <table class="table-auto">
              
              <thead>
                <tr>
                  <!-- free trial -->
                  <th class="w-1/4 min-w-[200px] px-5 absolute">
                    <div class="mb-10 text-left">
                      <span class="dodo-subtitle mb-3.5 block pt-6 text-xl font-bold dark:text-white">
                        Free Trial
                      </span>

                      <p class="mb-10 text-sm">
                        For teams and organizations who are want a taste of the Dodo experience. 
                      </p>
                      <!-- price -->
                      <h4 class="mb-6 ">
                        <span class="dodo-subtitle text-[20px] font-bold dark:text-white lg:text-[20px]">Free</span>
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

              <tbody>
                <!-- titles -->
                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <h5 class="font-medium text-black dark:text-white">
                      Key Features
                    </h5>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <h5 class="text-center font-medium text-black dark:text-white">
                      Features Limits
                    </h5>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <h5 class="text-center font-medium text-black dark:text-white">
                      Features Limits
                    </h5>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <h5 class="text-center font-medium text-black dark:text-white">
                      Features Limits
                    </h5>
                  </td>
                </tr>

                <!-- content -->
                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="font-medium">Seats</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">1 Developer</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">5 Developer</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">20 Developer</p>
                  </td>
                </tr>
                
                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="font-medium">Domains/Products</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">5 Products</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">5 Products</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">5 Products</p>
                  </td>
                </tr>

                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="font-medium">Email Support</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">6 Months</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">6 Months</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="text-center font-medium">6 Months</p>
                  </td>
                </tr>

                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="font-medium">All Pro Components</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z" fill="#13C296"></path>
                        <path d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z" fill="#13C296"></path>
                      </svg>
                    </p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z" fill="#13C296"></path>
                        <path d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z" fill="#13C296"></path>
                      </svg>
                    </p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z" fill="#13C296"></path>
                        <path d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z" fill="#13C296"></path>
                      </svg>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="font-medium">Design Source Files</p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z" fill="#FF9494"></path>
                        <path d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z" fill="#FF9494"></path>
                      </svg>
                    </p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z" fill="#13C296"></path>
                        <path d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z" fill="#13C296"></path>
                      </svg>
                    </p>
                  </td>
                  <td class="border-t border-stroke py-5 px-7 dark:border-strokedark">
                    <p class="flex justify-center text-center">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z" fill="#13C296"></path>
                        <path d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z" fill="#13C296"></path>
                      </svg>
                    </p>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div>
            <span class="absolute top-0 left-0 -z-1">
              <svg width="213" height="188" viewBox="0 0 213 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="50" r="138" fill="url(#paint0_linear)"></circle>
                <defs>
                  <linearGradient id="paint0_linear" x1="75" y1="-88" x2="75" y2="188" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3056D3" stop-opacity="0.15"></stop>
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span class="absolute top-30 left-11 -z-1">
              <svg width="50" height="109" viewBox="0 0 50 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="47.71" cy="107.259" r="1.74121" transform="rotate(180 47.71 107.259)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="91.9355" r="1.74121" transform="rotate(180 47.71 91.9355)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="76.6133" r="1.74121" transform="rotate(180 47.71 76.6133)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="47.0132" r="1.74121" transform="rotate(180 47.71 47.0132)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="16.7158" r="1.74121" transform="rotate(180 47.71 16.7158)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="61.6392" r="1.74121" transform="rotate(180 47.71 61.6392)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="32.0386" r="1.74121" transform="rotate(180 47.71 32.0386)" fill="#3056D3"></circle>
                <circle cx="47.71" cy="1.74121" r="1.74121" transform="rotate(180 47.71 1.74121)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="107.259" r="1.74121" transform="rotate(180 32.3877 107.259)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="91.9355" r="1.74121" transform="rotate(180 32.3877 91.9355)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="76.6133" r="1.74121" transform="rotate(180 32.3877 76.6133)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="47.0132" r="1.74121" transform="rotate(180 32.3877 47.0132)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="16.7158" r="1.74121" transform="rotate(180 32.3877 16.7158)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="61.6392" r="1.74121" transform="rotate(180 32.3877 61.6392)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="32.0386" r="1.74121" transform="rotate(180 32.3877 32.0386)" fill="#3056D3"></circle>
                <circle cx="32.3877" cy="1.74121" r="1.74121" transform="rotate(180 32.3877 1.74121)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="107.259" r="1.74121" transform="rotate(180 17.0654 107.259)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="91.9355" r="1.74121" transform="rotate(180 17.0654 91.9355)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="76.6133" r="1.74121" transform="rotate(180 17.0654 76.6133)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="47.0132" r="1.74121" transform="rotate(180 17.0654 47.0132)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="16.7158" r="1.74121" transform="rotate(180 17.0654 16.7158)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="61.6392" r="1.74121" transform="rotate(180 17.0654 61.6392)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="32.0386" r="1.74121" transform="rotate(180 17.0654 32.0386)" fill="#3056D3"></circle>
                <circle cx="17.0654" cy="1.74121" r="1.74121" transform="rotate(180 17.0654 1.74121)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="107.259" r="1.74121" transform="rotate(180 1.74121 107.259)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="91.9355" r="1.74121" transform="rotate(180 1.74121 91.9355)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="76.6133" r="1.74121" transform="rotate(180 1.74121 76.6133)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="47.0132" r="1.74121" transform="rotate(180 1.74121 47.0132)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="16.7158" r="1.74121" transform="rotate(180 1.74121 16.7158)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="61.6392" r="1.74121" transform="rotate(180 1.74121 61.6392)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="32.0386" r="1.74121" transform="rotate(180 1.74121 32.0386)" fill="#3056D3"></circle>
                <circle cx="1.74121" cy="1.74121" r="1.74121" transform="rotate(180 1.74121 1.74121)" fill="#3056D3"></circle>
              </svg>
            </span>
          </div>
        </div>

        <!-- pricing table -->
        

        <!-- end pricing table -->


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
  