<template>
    <div>
      <Header /> <!-- tailwind styling -->
      
      <!-- MAIN CONTENT START -->
      <main>


        <!-- Main banner START -->
        <section class="position-relative py-8 py-lg-9 mb-48" id="banner">
          <div class="bg-white page-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 dodo-banner p-4 sm:mt-9 lg:mt-7">
                  <h2 class="dodo-title font-display text-4xl sm:text-4xl mb-5 font-bold" data-aos="">
                    Contact the Dodo sales team
                  </h2>
                  
                  <p class="mb-4 leading-7 desc" data-aos="">
                    We value your inquiries and feedback. Whether you have questions about our features, 
                    need assistance with implementation, or want to explore customized plans, 
                    our dedicated team is here to help. 
                    Feel free to reach out through the contact form below, 
                    and one of our experts will get back to you promptly. 
                    Your seamless communication journey starts here – 
                    let's connect and make your interactions exceptional.
                  </p>
                  
                  <!-- list -->
                  <ol>
                    <li class="py-3">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_97_32079)">
                            <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_97_32079">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <span class="mx-auto max-w-full leading-7 dodo-link">Learn how to improve communication and collaboration within your organization.</span>
                    </li>
                    <li class="py-3">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_97_32079)">
                            <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_97_32079">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <span class="dodo-link">Learn how to take advantage of all our features.</span>
                    </li>
                    <li class="py-3">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_97_32079)">
                            <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fill-opacity="0.6"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_97_32079">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <span class="dodo-link">Get assistance on how to scale communications for all your branches.</span>
                    </li>
                  </ol>
                </div>
                
                <!-- /midd -->
                <div class="col-lg-1"></div>

                <div class="col-lg-5 p-4 mt-4" data-aos="slide-up">
                  <div class="contact-form">
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">First Name<span>*</span></label>
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Last Name<span>*</span></label>
                                <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                        </div>
                        <!-- country -->
                        <div class="py-2.5">
                            <label class="block " for="country">Country / Region<span>*</span></label>
                            <select name="" id="" class="form-control leading-tight">
                                <option value="">Select</option>
                                <option value="">Ghana</option>
                                <option value="">Nigeria</option>
                                <option value="">Mali</option>
                            </select>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Company<span>*</span></label>
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="companySize">Company Size<span>*</span></label>
                                    <input type="text" class="form-control" placeholder="Name" name="companySize" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Department</label>
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Role</label>
                                <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Phone Number</label>
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="py-2.5">
                                    <label class="block " for="fname">Work Email<span>*</span></label>
                                <input type="text" class="form-control" placeholder="Name" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="py-2.5">
                            <label for="enquiry">Enquiries, Questions, Suggestions, etc...</label>
                            <textarea rows="6" name="enquiry" class="form-control rounded-xl resize-none h-40" placeholder="How can we help you?"></textarea>
                        </div>

                        <!-- consent -->
                        <p class="py-2">By submitting this form, you agree to Dodo’s <a href="" class="underline">Terms of Service </a> and confirm you have read Dodo’s <a href="" class="underline">Privacy Policy</a>.</p>
                        
                        <!-- checkbox agreement -->
                        <div class="flex py-2">
                            <input class="inline-block mr-2" type="checkbox" id="agreed" required/>
                            <label class="py-1.5 mt-0">I give permission to Biztel to reach out to me regarding product offerings, services, events, webinars, and other promotional materials.</label>
                        </div>

                        <div class="py-0">
                            <button type="submit" class="btn btn-primary btn-dd btn-dodo mt-4">Submit</button>
                        </div>

                    </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Main banner END -->


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
  #banner {
    background-image: url('../assets/images/bg/20.jpg');
    background-position: center left;
    background-size: cover;
  }
  </style>
  