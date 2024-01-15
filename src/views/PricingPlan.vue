<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>

        <!-- trial -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-3 text-center lg:pt-32 product-banner">
            <h1 class="mx-auto max-w-1xl font-display text-3xl font-semibold tracking-tight sm:text-5xl py-5 leading-5">
                <span class="relative whitespace-wrap ">
                    <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 ">
                        Flexible Plans for Every Communication Need: Explore Our Pricing Options.
                    </span>
                </span>
            </h1>

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

        <section class="position-relative py-8 py-lg-9 mb-9 product-three">
          <div class="bg-white ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 py-9 img" data-aos="zoom-in">
                  <div class="img-place text-center">
                    <img src="../assets/img/placeholder-image.png" alt="">
                  </div>
                </div>

                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                  <h2 class="dodo-subtitle" data-aos="slide-up">
                    Intra-Organization communication worldwide.
                  </h2>
                  
                  <p class="mb-4 mt-7" data-aos="slide-up">
                    Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                    Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                  </p>
                  
                  
                 
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
  