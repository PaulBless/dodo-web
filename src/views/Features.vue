<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>

        <!-- Main banner START -->
        <section class="position-relative py-8 py-lg-9 pt-6" id="banner">
          <div class="bg-white page-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 dodo-banner p-4 sm:mt-9 lg:mt-12">
                  <h2 class="dodo-title text-4xl mb-5 font-bold" data-aos="">
                    Explore the Robust Features of Our Global Communication Solution.
                  </h2>

                  <div class="divider"></div>
                  
                  <p class="mb-4 desc" data-aos="">
                    Dive into the heart of innovation as you explore the features page of our communication solution. Discover a suite of robust tools designed to empower connectivity on a global scale, ensuring seamless communication across distances. From secure messaging to dynamic collaboration features, our platform is meticulously crafted to enhance your communication experience. 
                    Elevate your interactions and explore the full potential of connected and efficient communication.
                  </p>
                  
                 
                  <!-- TODO: Reactivate buttons after working on respective pages-->
                  <!-- free trial -->
                  <StartTrial />

                </div>
                
                <div class="col-lg-6 py-3 pt-16" data-aos="zoom-in">
                  <div class="img-place text-center">
                    <img src="../assets/img/seamless-communication.svg" alt="" srcset="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Main banner END -->


        <!-- voice features -->
        <section class="position-relative py-0 py-lg-9 calling">
          <div class="bg-white ">
            <div class="container">
                <p class="px-3 py-20 feature-title">Voice Calling Features</p>
                
                <!-- 1 -->
                <div class="row">
                    <div class="col-lg-5 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                        <img src="../assets/img/voice-calling-feature.png" alt="">
                    </div>
                    </div>

                    <div class="col-lg-7 content p-7 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle pt-10" data-aos="slide-up">
                        Crystal Clarity, Anywhere You Call.
                    </h2>

                    <div class="divider"></div>
                    
                    <p class="pt-5" data-aos="slide-up">
                        Immerse yourself in unparalleled communication experiences with our Calls Feature. Enjoy crystal-clear audio quality, whether you're connecting with colleagues across the office or clients across the globe. 
                        Our cutting-edge technology ensures a seamless and reliable calling experience, empowering you to stay connected with clarity from anywhere in the world.                    </p>
                                        
                    </div>
                </div>
            </div>
            
            <!-- 2 -->
            <div class="container">
                <div class="row">
                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle pt-0" data-aos="slide-up">
                    Voice Calling Feature 2
                    </h2>

                    <div class="divider"></div>
                    
                    <p class="mb-4 pt-5" data-aos="slide-up">
                    Immerse yourself in unparalleled communication experiences with our Calls Feature. Enjoy crystal-clear audio quality, whether you're connecting with colleagues across the office or clients across the globe. Our cutting-edge technology ensures a seamless and reliable calling experience, empowering you to stay connected with clarity from anywhere in the world.
                    </p>
                    
                    
                </div>
                <div class="col-lg-6 py-3 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                    <img src="../assets/img/voice-calling-feature.png" alt="" srcset="">
                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>
        <!-- end -->
  

        <!-- voice mail features -->
        <section class="position-relative py-0 py-lg-9 calling">
          <div class="bg-white ">
            <!-- 1 -->
            <div class="container">
                <p class="px-3 feature-title">Voicemail Features</p>
                
                <div class="row">
                    
                    <div class="col-lg-7 content p-7 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle font-bold pt-10" data-aos="slide-up">
                        Voicemail Redefined: Your Messages, Your Way.
                    </h2>

                    <div class="divider"></div>
                    
                    <p class="pt-5" data-aos="slide-up">
                        Experience a new standard in communication with our Voicemail Feature. 
                        Tailor your message management with personalized options and easy accessibility. 
                        Whether capturing important details or staying organized on the go, our innovative voicemail feature offers a convenient and customizable experience, putting you in control of your messages, your way.
                    </p>
                                        
                    </div>
                    
                    <div class="col-lg-5 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                        <img src="../assets/img/voicemail-feature.png" alt="">
                    </div>
                    </div>

                </div>
            </div>

            <!-- 2 -->
            <div class="container p-0">
                <div class="row">
                <div class="col-lg-6 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                    <img src="../assets/img/voicemail-feature.png" alt="" srcset="">
                    </div>
                </div>
                
                <div class="col-lg-6 content py-12 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle pt-10" data-aos="slide-up">
                    Voicemail Features 2
                    </h2>

                    <p class="pt-5" data-aos="slide-up">
                    Immerse yourself in unparalleled communication experiences with our Calls Feature. Enjoy crystal-clear audio quality, whether you're connecting with colleagues across the office or clients across the globe. Our cutting-edge technology ensures a seamless and reliable calling experience, empowering you to stay connected with clarity from anywhere in the world.
                    </p>
                    
                    
                </div>
                </div>
            </div>
            
          </div>
        </section>
        <!-- end -->
  

        <!-- messaging features -->
        <section class="position-relative py-0 py-lg-9 calling">
          <div class="bg-white ">
            <div class="container">
                <p class="px-3 feature-title">Messaging Features</p>
                <!-- 1 -->
                <div class="row">
                    <div class="col-lg-5 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                        <img src="../assets/img/Frame.png" alt="">
                    </div>
                    </div>

                    <div class="col-lg-7 content p-7 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle pt-10" data-aos="slide-up">
                        Crystal Clarity, Anywhere You Call.
                    </h2>

                    <div class="divider"></div>
                    
                    <p class="pt-5" data-aos="slide-up">
                        Immerse yourself in unparalleled communication experiences with our Calls Feature. Enjoy crystal-clear audio quality, whether you're connecting with colleagues across the office or clients across the globe. 
                        Our cutting-edge technology ensures a seamless and reliable calling experience, empowering you to stay connected with clarity from anywhere in the world.                    </p>
                                        
                    </div>
                </div>
            </div>
            
            <!-- 2 -->
            <div class="container">
                <div class="row">
                <div class="col-lg-6 content p-4 sm:mt-9 lg:mt-12">
                    <h2 class="dodo-subtitle pt-0" data-aos="slide-up">
                    Messaging Feature 2
                    </h2>

                    <div class="divider"></div>
                    
                    <p class="mb-4 pt-5" data-aos="slide-up">
                    Immerse yourself in unparalleled communication experiences with our Calls Feature. Enjoy crystal-clear audio quality, whether you're connecting with colleagues across the office or clients across the globe. Our cutting-edge technology ensures a seamless and reliable calling experience, empowering you to stay connected with clarity from anywhere in the world.
                    </p>
                    
                </div>

                <div class="col-lg-6 py-3 img" data-aos="zoom-in">
                    <div class="img-place text-center">
                    <img src="../assets/img/Frame.png" alt="" srcset="">
                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>
        <!-- end -->


        <!-- TODO: -->
        <!-- add communication tool suit section -->
        <ToolSuit />

      </main>
      
      <Footer />
  
  
      <!-- Back to top -->
      <div class="back-top"></div>
    </div>
  </template>
  
  <script setup >
  import Header from "../components/Header.vue";
  import StartTrial from "../components/StartTrial.vue";
  import ToolSuit from "../components/ToolSuit.vue";
  import Footer from "../components/Footer.vue";
  </script>
  
  <style scoped>
  #banner {
    background-image: url('../assets/images/bg/20.jpg');
    background-position: center left;
    background-size: cover;
  }
  </style>
  