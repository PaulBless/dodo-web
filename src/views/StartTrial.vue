<script setup lang="ts">
import { ref } from 'vue'
import * as Yup from 'yup'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Field, Form } from 'vee-validate'

import Carousel from '../components/Carousel.vue'

// define store
// const store = useStore()
const router = useRouter()

// create reactive reference
// const { ref } = defineProps(['email'])
const showForgotEmailForm = ref(true)
const showResetCodeForm = ref(false)
const showResetPasswordForm = ref(false)
const resetCode = ref('')
const type = ref('verify')
const showPassword = ref(false)

// action state variables
const errorMessage = ref('')
const isLoading = ref(false)
const showErrorAlert = ref(false)

// form validation schema using vee-validate plugin
const schema = Yup.object().shape({
  email: Yup.string().required('Email address is required!').email('Provide a valid email address'),
  pass1: Yup.string().required('Password is required!'),
  pass2: Yup.string().required('Confirm Password is required!'),
})
const schemaVerify = Yup.object().shape({
  otp: Yup.string().min(6, 'Code cannot be less than 6 characters').max(6, 'Code must be exactly 6 characters').required('Reset code is required'),
})
const schemaReset = Yup.object().shape({
  resetCode: Yup.string().min(6, 'Reset code cannot be less than 6 characters').max(6, 'Reset must be exactly 6 characters').required('Reset Code is required'),
  password: Yup.string().min(8, 'Should be at least 8 characters').max(30, 'Password cannot exceed 30 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!').min(8, 'Should be at least 8 characters').max(30, 'Password cannot exceed 30 characters').required('Confirm password is required'),
})

// show or hide password value
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

function gotoLogin() {
  setTimeout(() => {
    router.push({ name: 'Login' })
  }, 500)
}

function verifyAccount() {
  router.push({ name: 'VerifyAccount' })
}

// submit forgot form
async function submitForgotEmailForm(values: any) {
  /* eslint-disable no-console */
  console.log(values)
  /* eslint-enable no-console */
  authenticateEmail(values)
}
async function authenticateEmail(email: string) {
  try {
    isLoading.value = true
    showErrorAlert.value = false
    const response = await axios.post('users/forgot/password', email)
    if (response.data.code === 200) {
      isLoading.value = false
      errorMessage.value = response.data.message
      
      // show verify reset code form
      showResetCodeForm.value = true
      showForgotEmailForm.value = false
      showResetPasswordForm.value = false
    }
    else {
      
    }
  }
  catch (error: any) {
    /* eslint-disable no-console */
    console.log(error)
    showErrorAlert.value = true
    isLoading.value = false
    errorMessage.value = error.message
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      console.log('Request timed out!')
      
    }
    else {
      console.log(error.message)
      
    }
  }
}

// verify reset code
async function verifyCode(values: any) {
  const body = {
    otp: values.otp,
    token: values.token,
    type: values.verify_type,
  }

  try {
    isLoading.value = true
    showErrorAlert.value = false
    const response = await axios.post('users/verify', body)
    // const user = response.data?.data
    // console.log(user)
    if (response.data.status === 200) {
      isLoading.value = false
      
      // show reset password form
      //   gotoResetPassword()
      showResetCodeForm.value = false
      showForgotEmailForm.value = false
      showResetPasswordForm.value = true
    }
  }
  catch (error: any) {
    console.log(error)
    showErrorAlert.value = true
    isLoading.value = false
    
  }
}
async function submitResetCodeForm(body: any) {
  verifyCode(body)
}

// Reset Password Functions
async function resetPassword(user: any) {
  const body = {
    resetCode: user.appName,
    password: user.email,
    passwordConfirm: user.password,
  }

  try {
    isLoading.value = true
    showErrorAlert.value = false
    const response = await axios.post('users/password/reset', body)
    const user = response.data?.data
    console.log(user)
    if (response.data.code === 200) {
      isLoading.value = false
      // Redirect to login
      gotoLogin()
    }
    else {
      
    }
  }
  catch (error: any) {
    console.log(error)
    showErrorAlert.value = true
    isLoading.value = false
    
  }
}
async function submitResetPassword(values: any) {
  resetPassword(values)
}
</script>

<template>
  <div>
    <div class="flex px-4 mt-0 mb-0 bg-white ">
      <!-- First Column: Carousel -->
      <div class="w-2/6 sm:w-1/3 hidden py-0 px-4 pl-3 ml-4 z-0 top-0 h-screen transition-position overflow-hidden -left-60 lg:left-0 lg:block xl:flex">
        <div class="relative w-full " data-carousel="slide">
          <!-- Carousel wrapper -->
          <Carousel />
        </div>
      </div>
      <!-- Second Column: Login Form -->
      <div class="w-4/6 h-screen flex items-center mx-auto lg:p-16">
        <div class="w-8/12 p-8">
           <img src="../assets/dodo-logo.png" alt="Dodo" class="text-center px-9 mb-5 h-[50px]">
          
          <Form v-if="showForgotEmailForm" v-slot="{ errors }" :validation-schema="schema" v-on:submit="submitForgotEmailForm">

            <p class="text-left label max-w-full mb-4">Provide your details to continue.</p>

            <div class="mb-4">
              <label for="email" class="block label font-medium">Email Address</label>
              <Field type="text" name="email" class="label mt-1 p-2 w-full border border-gray-600 input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.email }" />
              <div class="invalid-feedback">
                {{ errors.email }}
              </div>
            </div>
            <div class="mb-4">
              <label for="email" class="block label font-medium">Password</label>
              <Field type="text" name="pass1" class="label mt-1 p-2 w-full border border-gray-600 input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.pass1 }" />
              <div class="invalid-feedback">
                {{ errors.pass1 }}
              </div>
            </div>
            <div class="mb-4">
              <label for="email" class="block label font-medium">Confirm password</label>
              <Field type="text" name="pass2" class="label mt-1 p-2 w-full border border-gray-600 input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.pass2 }" />
              <div class="invalid-feedback">
                {{ errors.pass2 }}
              </div>
            </div>

            <div>
              <button v-if="!isLoading" type="submit" class="bg-blue-600 w-100 label text-white px-4 py-2 rounded-xl">Continue</button>
              <button v-if="isLoading" type="button" class="bg-blue-400 label w-100 text-white px-4 py-2 rounded-xl" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                please wait...
              </button>
            </div>

            <p class="text-center label max-w-full py-10">
              Already have an account?
              <a to="https://app.usedodo.com" class="font-bold hover:text-blue-600 hover:underline">Login</a>
            </p>
          </Form>

          <!-- verify code form -->
          <Form v-if="showResetCodeForm" v-slot="{ errors }" :validation-schema="schemaVerify" v-on:submit="submitResetCodeForm">
            <h2 class="text-3xl label text-center font-bold mb-5">Email Verification</h2>
            <p class="text-left label text-sm max-w-full mb-4">Enter the password reset code that was sent to your email to continue.</p>

            <div class="mb-4">
              <Field v-model="type" type="text" name="type" hidden />
              <label for="otp" class="block label text-sm font-medium">Reset Code</label>
              <Field type="text" name="otp" class="label mt-1 p-2 w-full border border-gray-600 input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.otp }" />
              <div class="invalid-feedback">
                {{ errors.otp }}
              </div>
            </div>

            <div>
              <button v-if="!isLoading" type="submit" class="bg-blue-600 w-100 label text-white px-4 py-2 rounded-xl">Continue</button>
              <button v-if="isLoading" type="button" class="bg-blue-400 w-100 label text-white px-4 py-2 rounded-xl" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                verifying...
              </button>
            </div>
          </Form>

          <!-- reset password form -->
          <transition
            enter-active-class="transition duration-150 ease-out transform"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <Form v-if="showResetPasswordForm" v-slot="{ errors }" :validation-schema="schemaReset" @submit.prevent="submitResetPassword">
              <h2 class="text-3xl label text-center font-bold mb-5">Reset Password</h2>
              <p class="text-left label text-sm max-w-full mb-4">Create a new password to access your account.</p>

              <Field v-model="resetCode" type="text" name="resetCode" hidden />
              <!-- new password input -->
              <div class="mb-4">
              <label for="otp" class="block label text-sm font-medium">New Password</label>
              <Field :type="showPassword ? 'text' : 'password'" name="password" class="label mt-1 p-2 w-full input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.password }" />
              <button type="button" class="absolute bottom-0 left-84 mt-2.5 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
                <!-- Eye Icon -->
                <svg v-if="showPassword" class="eye-close" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clip-path="url(#clip0_11_29416)">
                    <path d="M12 6.35902C15.79 6.35902 19.17 8.48902 20.82 11.859C20.23 13.079 19.4 14.129 18.41 14.979L19.82 16.389C21.21 15.159 22.31 13.619 23 11.859C21.27 7.46902 17 4.35902 12 4.35902C10.73 4.35902 9.51 4.55902 8.36 4.92902L10.01 6.57902C10.66 6.44902 11.32 6.35902 12 6.35902ZM10.93 7.49902L13 9.56902C13.57 9.81902 14.03 10.279 14.28 10.849L16.35 12.919C16.43 12.579 16.49 12.219 16.49 11.849C16.5 9.36902 14.48 7.35902 12 7.35902C11.63 7.35902 11.28 7.40902 10.93 7.49902ZM2.01 4.22902L4.69 6.90902C3.06 8.18902 1.77 9.88902 1 11.859C2.73 16.249 7 19.359 12 19.359C13.52 19.359 14.98 19.069 16.32 18.539L19.74 21.959L21.15 20.549L3.42 2.80902L2.01 4.22902ZM9.51 11.729L12.12 14.339C12.08 14.349 12.04 14.359 12 14.359C10.62 14.359 9.5 13.239 9.5 11.859C9.5 11.809 9.51 11.779 9.51 11.729ZM6.11 8.32902L7.86 10.079C7.63 10.629 7.5 11.229 7.5 11.859C7.5 14.339 9.52 16.359 12 16.359C12.63 16.359 13.23 16.229 13.77 15.999L14.75 16.979C13.87 17.219 12.95 17.359 12 17.359C8.21 17.359 4.83 15.229 3.18 11.859C3.88 10.429 4.9 9.24902 6.11 8.32902Z" fill="black" fill-opacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_11_29416">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.359009)"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg v-else class="eye-open" xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
                  <path d="M26.8394 10.1609C24.2987 4.41406 19.2644 0.5 13.5034 0.5C7.74248 0.5 2.70764 4.41875 0.166027 10.1609C0.0766836 10.4094 0.00341797 10.7656 0.00341797 11C0.00341797 11.2333 0.0766367 11.5906 0.166027 11.7983C2.70904 17.5859 7.74248 21.5 13.5034 21.5C19.2644 21.5 24.2987 17.5822 26.8394 11.8391C26.9284 11.5906 27.0034 11.1922 27.0034 11C27.0034 10.7656 26.9284 10.4094 26.8394 10.1609ZM13.5034 19.25C8.84029 19.25 4.54092 16.0859 2.27217 11.0422C4.55076 5.90937 8.84404 2.75 13.5034 2.75C18.1665 2.75 22.4659 5.91406 24.7347 10.9578C22.4144 16.0906 18.1628 19.25 13.5034 19.25ZM13.5034 5C10.1894 5 7.50342 7.68594 7.50342 11C7.50342 14.3141 10.1908 17 13.5034 17C16.8147 17 19.5034 14.3131 19.5034 11.0047C19.5034 7.69063 16.8175 5 13.5034 5ZM13.5034 14.75C11.4358 14.75 9.75342 13.0677 9.75342 11C9.75342 10.9649 9.76276 10.9325 9.76376 10.8976C10.0019 10.9578 10.2456 11 10.5034 11C12.1604 11 13.5034 9.65703 13.5034 8C13.5034 7.74312 13.4624 7.4975 13.401 7.26031C13.4378 7.25938 13.4706 7.25 13.5034 7.25C15.5711 7.25 17.2534 8.93234 17.2534 11.0023C17.2534 13.0672 15.5706 14.75 13.5034 14.75Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <div class="invalid-feedback label">
                {{ errors.newPassword }}
              </div>
              </div>
              <!-- confirm password input -->
              <div class="mb-4">
                <label class="block label text-sm font-medium">Confirm Password</label>
                <Field :type="showPassword ? 'text' : 'password'" name="confirmPassword" class="label mt-1 p-2 w-full input rounded-xl focus:outline-none focus:border-blue-100" :class="{ 'is-invalid': errors.password }" />
                <button type="button" class="absolute bottom-0 left-84 mt-2.5 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
                  <!-- Eye Icon -->
                  <svg v-if="showPassword" class="eye-close" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clip-path="url(#clip0_11_29416)">
                    <path d="M12 6.35902C15.79 6.35902 19.17 8.48902 20.82 11.859C20.23 13.079 19.4 14.129 18.41 14.979L19.82 16.389C21.21 15.159 22.31 13.619 23 11.859C21.27 7.46902 17 4.35902 12 4.35902C10.73 4.35902 9.51 4.55902 8.36 4.92902L10.01 6.57902C10.66 6.44902 11.32 6.35902 12 6.35902ZM10.93 7.49902L13 9.56902C13.57 9.81902 14.03 10.279 14.28 10.849L16.35 12.919C16.43 12.579 16.49 12.219 16.49 11.849C16.5 9.36902 14.48 7.35902 12 7.35902C11.63 7.35902 11.28 7.40902 10.93 7.49902ZM2.01 4.22902L4.69 6.90902C3.06 8.18902 1.77 9.88902 1 11.859C2.73 16.249 7 19.359 12 19.359C13.52 19.359 14.98 19.069 16.32 18.539L19.74 21.959L21.15 20.549L3.42 2.80902L2.01 4.22902ZM9.51 11.729L12.12 14.339C12.08 14.349 12.04 14.359 12 14.359C10.62 14.359 9.5 13.239 9.5 11.859C9.5 11.809 9.51 11.779 9.51 11.729ZM6.11 8.32902L7.86 10.079C7.63 10.629 7.5 11.229 7.5 11.859C7.5 14.339 9.52 16.359 12 16.359C12.63 16.359 13.23 16.229 13.77 15.999L14.75 16.979C13.87 17.219 12.95 17.359 12 17.359C8.21 17.359 4.83 15.229 3.18 11.859C3.88 10.429 4.9 9.24902 6.11 8.32902Z" fill="black" fill-opacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_11_29416">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.359009)"/>
                    </clipPath>
                  </defs>
                  </svg>
                  <svg v-else class="eye-open" xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22" fill="none">
                    <path d="M26.8394 10.1609C24.2987 4.41406 19.2644 0.5 13.5034 0.5C7.74248 0.5 2.70764 4.41875 0.166027 10.1609C0.0766836 10.4094 0.00341797 10.7656 0.00341797 11C0.00341797 11.2333 0.0766367 11.5906 0.166027 11.7983C2.70904 17.5859 7.74248 21.5 13.5034 21.5C19.2644 21.5 24.2987 17.5822 26.8394 11.8391C26.9284 11.5906 27.0034 11.1922 27.0034 11C27.0034 10.7656 26.9284 10.4094 26.8394 10.1609ZM13.5034 19.25C8.84029 19.25 4.54092 16.0859 2.27217 11.0422C4.55076 5.90937 8.84404 2.75 13.5034 2.75C18.1665 2.75 22.4659 5.91406 24.7347 10.9578C22.4144 16.0906 18.1628 19.25 13.5034 19.25ZM13.5034 5C10.1894 5 7.50342 7.68594 7.50342 11C7.50342 14.3141 10.1908 17 13.5034 17C16.8147 17 19.5034 14.3131 19.5034 11.0047C19.5034 7.69063 16.8175 5 13.5034 5ZM13.5034 14.75C11.4358 14.75 9.75342 13.0677 9.75342 11C9.75342 10.9649 9.76276 10.9325 9.76376 10.8976C10.0019 10.9578 10.2456 11 10.5034 11C12.1604 11 13.5034 9.65703 13.5034 8C13.5034 7.74312 13.4624 7.4975 13.401 7.26031C13.4378 7.25938 13.4706 7.25 13.5034 7.25C15.5711 7.25 17.2534 8.93234 17.2534 11.0023C17.2534 13.0672 15.5706 14.75 13.5034 14.75Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>
                <div class="invalid-feedback label">
                  {{ errors.confirmPassword }}
                </div>
              </div>

              <div>
                <button v-if="!isLoading" type="submit" class="bg-blue-600 w-100 label text-white px-4 py-2 rounded-xl">Done</button>
                <button v-if="isLoading" type="button" class="bg-blue-400 w-100 label text-white px-4 py-2 rounded-xl" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  completing...
                </button>
              </div>
            </Form>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*<!-- Carousel -->*/
.carousel-inner {
  height: fit-content;
  border-radius: 30px;
}

/* . */
.carousel-caption{
  bottom: 25%;
  text-align: center;
}
.carousel-caption h5 {
  font-weight: 600;
  margin-bottom: 56px;
}

/*<!-- Carousel Buttons -->*/
.carousel-indicators button  {

}
.carousel-indicators .active {
  bottom: 0;
  background-color: #3D76EB;
  height: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
