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
                <FreeTrial />

              </div>

              <div class="col-lg-7 py-2" data-aos="zoom-in" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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
              <div class="col-lg-6 py-3 img" data-aos="zoom-in" data-aos-duration="1500" lazy-loading="">
                <div class="img-place text-center pt-24">
                  <img src="../assets/img/seamless-communication.svg" alt="">
                </div>
              </div>

              <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                <!-- title -->
                <h2 class="dodo-subtitle" data-aos="slide-up">
                  Seamless Intra-Organization communication. Anywhere in the world.
                </h2>

                <div class="divider"></div>
                <!-- content -->
                <p class="py-12" data-aos="slide-up">
                  Facilitate seamless intra-organization communication globally with our innovative platform. Our solution ensures instant and reliable connectivity for teams, promoting efficient collaboration from anywhere in the world. Break down communication barriers and enhance teamwork effortlessly with our technology. 
                  Experience a new era of interconnectedness, fostering productivity and unity across your organization.
                </p>
                
                <!-- TODO: Reactivate links after working on respective pages-->
                <!-- link -->
                <router-link
                  class="dodo-link"
                  to=""
                  data-aos="fade-up">
                  Learn more
                  <svg class="inline-block link-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                
                <p class="py-12" data-aos="fade-up">
                  Upgrade your communication strategy with our reliable platform, delivering clear voice calls and fast messaging for seamless connectivity. 
                  Our feature-rich solution ensures effective communication while prioritizing security for your sensitive data. Experience the future of corporate communication with innovation and reliability at its core.
                </p>
                
                <!-- TODO: Reactivate links after working on respective pages-->
                <!-- link -->
                <router-link
                  class="dodo-link"
                  to=""
                  data-aos="fade-up">
                  Learn more
                  <svg class="inline-block link-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
              <div class="col-lg-6 py-3 img" data-aos="zoom-in" data-aos-duration="1500">
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
              <div class="col-lg-6 py-3 img" data-aos="zoom-in" data-aos-duration="1500">
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
                <router-link
                  class="dodo-link"
                  to=""
                  data-aos="fade-up">
                  Learn more
                  <svg class="inline-block link-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            </div>
          </div>
        </div>
      </section>
      <!-- end -->

      <ToolSuit />
      
      <!-- templating for later use -->
      <div id="download" class="basic-5 hidden">
          <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-4">
              <div class="mb-16 lg:mb-0">
                  <img src="../assets/img/home-bg.png" alt="alternative" />
              </div>
              <div class="lg:mt-24 xl:mt-44 xl:ml-12">
                  <p class="mb-9 text-gray-800 text-3xl leading-10">Team management mobile applications don’t get much better than Pavo. Download it today</p>
                  <a class="btn-solid-lg" href="#your-link"><i class="fab fa-apple"></i>Download</a>
                  <a class="btn-solid-lg secondary" href="#your-link"><i class="fab fa-google-play"></i>Download</a>
              </div>
          </div>
          <!-- end of container -->
      </div>

      <div class="pt-4 pb-14 text-center hidden">
          <div class="container px-4 sm:px-8 xl:px-4">
              <p class="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto"> Team management mobile apps don’t get better than Pavo. It’s probably the best app in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</p>
          </div> <!-- end of container -->
      </div>

      <div class="hidden animate_right w-full max-w-[200px] xl:max-w-[248px]">
        <div class="w-full max-w-[200px] xl:max-w-[248px] aspect-[62/53] relative">
          <img alt="features" loading="lazy" decoding="async" data-nimg="fill" class="shadow-10 rounded-[15px]" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw" srcset="">
        </div>
      </div>
      <!-- templating end -->


      <div class="container mx-auto py-20 hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Card 1</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Card 2</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Card 3</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
          </div>

          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Card 4</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <!-- password input -->
      <!-- <div class="mb-6"><label class="mb-2.5 block font-medium text-black dark:text-white">Re-type Password</label><div class="relative"><input type="password" placeholder="6+ Characters, 1 Capital letter" class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"><span class="absolute right-4 top-4"><svg class="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z" fill=""></path><path d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z" fill=""></path></g></svg></span></div></div> -->

    </main>

    <Footer />

    <!-- Back to top -->
    <div class="back-top"></div>
  </div>
</template>

<script setup >
import Header from "../components/Header.vue";
import FreeTrial from "../components/FreeTrial.vue";
import ToolSuit from "../components/ToolSuit.vue";
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
