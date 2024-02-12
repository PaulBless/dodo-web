<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>

        <!-- trial -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-5 text-center lg:pt-32 product-banner">
          <h1 class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight xl:text-[52px] xl:leading-tight pt-3">
            Seamless Communication
          </h1>
          <h1 class="hidden mx-auto max-w-7xl font-display text-3xl font-semibold tracking-tight sm:text-7xl pt-5">
            <span class="relative whitespace-nowrap ">
              <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 ">Seamless Communication</span>
            </span>
          </h1>

          <h2 class="mx-auto text-4xl dodo-subtitle py-3">
            The power of seamless communication in one application.
          </h2>
            
          <p class="mx-auto mt-6 max-w-6xl text-lg tracking-tight leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit purus aliquet ipsum sodales venenatis. Etiam congue dictum tellus, sed sagittis ante luctus sit amet. Nullam vitae mi pellentesque, convallis erat ut, feugiat justo. Mauris pulvinar ipsum at gravida luctus. Praesent et congue nunc, non imperdiet sem. Integer mollis nulla metus, pulvinar ultrices lacus iaculis vitae. Mauris sodales pharetra erat id faucibus. Ut facilisis diam sed metus blandit blandit. In et mi justo. 
            Phasellus fringilla, quam eu porta pharetra, arcu erat mattis nulla, eu consequat dolor sapien sed nibh. Vivamus mattis id enim sed consequat
          </p>
            
            <div class="mt-10 flex justify-center gap-x-6 hidden">
                <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" variant="solid" color="slate" href="/register">
                    Start Free Trial
                </a>
                <a class="group inline-flex items-center justify-center py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300" variant="outline" color="slate" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <span class="ml-3">Contact Us
                        <svg class="inline-block " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_18_1117)">
                            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black" fill-opacity="0.6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_18_1117">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </span>
                </a>
            </div>

            <div class="mt-10 flex justify-center gap-x-6 ">
                <start-trial data-aos=""/>
            </div>

            <!-- img -->
            <div class="mx-auto mt-32 flex justify-center">
                <img src="../assets/img/placeholder-image.png" alt="" sizes="" srcset="">
            </div>
        </div>
        <!-- end trial -->


        <!-- seamless communication -->
        <section class="position-relative py-8 py-lg-9 product-one">
          <div class="bg-white ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 py-9 img" data-aos="zoom-in">
                  <div class="img-place text-center pt-20">
                    <img src="../assets/img/placeholder-image.png" alt="">
                  </div>
                </div>

                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                  <h2 class="dodo-subtitle pt-16" data-aos="slide-up">
                    Seamless Communication Anywhere in the World.
                  </h2>
                  
                  <p class="mb-4 mt-7" data-aos="slide-up">
                    Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                    Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                  </p>
                  
                  <call-to-action/>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="position-relative py-8 py-lg-9 product-two">
          <div class="bg-white ">
            <div class="container">
              <div class="row">

                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                  <h2 class="dodo-subtitle" data-aos="slide-up">
                    Seamless Intra-Organization communication.
                  </h2>
                  
                  <p class="mb-4 mt-7" data-aos="slide-up">
                    Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                    Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                  </p>
                  
                  <call-to-action/>
                 
                </div>

                <div class="col-lg-6 py-9 img" data-aos="zoom-in">
                  <div class="img-place text-center">
                    <img src="../assets/img/placeholder-image.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="position-relative py-12 py-lg-16 mb-32 product-three">
          <div class="bg-white ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 py-9 lg:mt-5 img" data-aos="zoom-in">
                  <div class="img-place text-center">
                    <img src="../assets/img/placeholder-image.png" alt="">
                  </div>
                </div>

                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-5">
                  <h2 class="dodo-subtitle" data-aos="slide-up">
                    Intra-Organization communication worldwide.
                  </h2>
                  
                  <p class="mb-4 mt-7" data-aos="slide-up">
                    Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                    Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                  </p>
                  
                  <call-to-action/>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end -->

  
      </main>
  
      <Footer />
  
      <!-- Back to top -->
      <div class="back-top"></div>
    </div>
  </template>
  
  <script setup >
  import Header from "../components/Header.vue";
  import StartTrial from "../components/StartTrial.vue";
  import CallToAction from "../components/CallToAction.vue";
  import Footer from "../components/Footer.vue";
  </script>
  
  <style scoped>
 
  .product-banner{
    background-image: url('../assets/img/circle-bg.png');
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 90%;
  }

  .product-one.content{
    margin: 0;
    display: flex;
    place-items: center;
  }
  </style>
  