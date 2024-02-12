import { createRouter, createWebHistory } from 'vue-router';

import Landing from "../views/Landing.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Feature from "../views/Features.vue";
import Industry from "../views/Industries.vue";
import Pricing from "../views/PricingPlan.vue";
import Product from "../views/Product.vue";
import Faq from "../views/FAQ.vue";
import StartTrial from "../views/StartTrial.vue";

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact
  },
  {
    path: '/features',
    name: 'features',
    component: Feature
  },
 {
    path: '/industries',
    name: 'industries',
    component: Industry
  },
 {
    path: '/products',
    name: 'products', 
    component: Product
  },
 {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
 {
    path: '/start-trial',
    name: 'start-trial',
    component: StartTrial
  },


  // {
  //   path: '/privacy-policy',
  //   name: 'privacy-policy',
  //   component: () => import('../views/privacy.vue'),
  // },
  // {
  //   path: '/terms-and-conditions',
  //   name: 'tnc',
  //   component: () => import('../views/terms-conditions.vue'),
  // },
  
 
];

const router = createRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
  history: createWebHistory(),
  linkActiveClass: 'dodo-active-link',
});

export default router;
