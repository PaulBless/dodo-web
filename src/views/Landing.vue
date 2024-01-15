<template>
  <div>
    <Header /> <!-- tailwind styling -->
    
    <!-- MAIN CONTENT START -->
    <main>

      <!-- Main banner START -->
      <section class="position-relative py-8 py-lg-9" id="banner">
        <div class="bg-white page-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 p-7 sm:mt-9 lg:mt-12">
                <h1 class="dodo-title pt-3" data-aos="slide-right">
                  Discover a new mode of <br/>
                  communication in your <br/>
                  organization.
                </h1>

                <div class="divider"></div>
                
                <p class="py-12" data-aos="fade-up">
                  Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                  Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                </p>
                
                <!-- TODO: Reactivate buttons after working on respective pages-->
                <!-- free trial -->
                <a data-aos="slide-in" class="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" color="blue" variant="solid" href="/register">
                      <span>Start Free <span class="hidden lg:inline">Trial </span>
                      </span>
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
                <!-- contact link -->
                <router-link to="/contact-us" class="btn btn-outline ml-2" data-aos="slide-in">
                  Contact Us 
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
                </router-link>
              </div>

              <div class="col-lg-7 py-2" data-aos="zoom-in">
                <div class="text-center" id="img-place">
                  <img src="../assets/img/home-img.png" alt="Dodo Communication" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Main banner END -->

      <!-- seamless communication -->
      <section class="position-relative py-8 py-lg-9 communication">
        <div class="bg-white ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 py-3 img" data-aos="zoom-in">
                <div class="img-place text-center pt-24">
                  <img src="../assets/img/seamless-communication.svg" alt="">
                </div>
              </div>

              <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                <h2 class="dodo-subtitle" data-aos="slide-up">
                  Seamless Intra-Organization communication. Anywhere in the world.
                </h2>

                <div class="divider"></div>
                
                <p class="py-12" data-aos="slide-up">
                  Facilitate seamless intra-organization communication globally with our innovative platform. Our solution ensures instant and reliable connectivity for teams, promoting efficient collaboration from anywhere in the world. Break down communication barriers and enhance teamwork effortlessly with our technology. 
                  Experience a new era of interconnectedness, fostering productivity and unity across your organization.
                </p>
                
                <!-- TODO: Reactivate links after working on respective pages-->
                <!-- link -->
                <a href="" class="font-semibold text-gray-700" data-aos="fade-up">
                  Learn more
                  <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_18_1117)">
                          <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black" fill-opacity="0.6"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_18_1117">
                          <rect width="24" height="24" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end -->

      <!-- easy collaboration -->
      <section class="position-relative py-8 py-lg-9 collaboration">
        <div class="bg-white">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 content pt-7 sm:mt-9 lg:mt-12">
                <h2 class="dodo-subtitle" data-aos="slide-up">
                  Easy Collaboration At Your Fingertips
                </h2>

                <div class="divider"></div>
                
                <p class="py-12" data-aos="slide-up">
                  Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                  Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                </p>
                
                <!-- TODO: Reactivate links after working on respective pages-->
                <!-- link -->
                <a href="" class="font-semibold text-gray-700">
                  Learn more
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
                </a>
               
              </div>
              <div class="col-lg-6 py-3 img" data-aos="zoom-in">
                <div class="img-place text-center">
                  <img src="../assets/img/easy-collaboration.svg" alt="" srcset="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end -->

      <!-- secure communication -->
      <section class="position-relative py-8 py-lg-9 collaboration">
        <div class="bg-white">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 py-3 img" data-aos="zoom-in">
                <div class="img-place text-center">
                  <img src="../assets/img/secure-communication.svg" alt="">
                </div>
              </div>
              <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                <h2 class="dodo-subtitle" data-aos="slide-up">
                  Secure Communications: Fortifying Your World of Seamless Communication.
                </h2>

                <div class="divider"></div>
                
                <p class="py-12" data-aos="slide-up">
                  Experience peace of mind with our Secure Communications solution, fortifying your global network of seamless communication. Our cutting-edge technology ensures confidentiality and integrity, safeguarding your sensitive data at every exchange. 
                  Elevate your organizational connectivity with a robust layer of security, promoting trust and reliability in every interaction. Embrace seamless communication with the confidence of fortified protection.
                </p>
                
                <!-- TODO: Reactivate links after working on respective pages-->
                <!-- link -->
                <a href="" class="font-semibold text-gray-700">
                  Learn more
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
                </a>
               
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
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
#banner123 {
  background-image: url('../assets/img/home-img.png');
  background-position: right center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
}
.dodo-banner {
  background-image: url('../assets/img/home-img-1.png');
  background-position: right center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#img-place {
  background-image: url('../assets/img/home-bg.png');
  background-position: center left;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* place-items: center; */
}
</style>
