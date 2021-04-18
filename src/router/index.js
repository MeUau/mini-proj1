// Roteador

// @ = alias de /src
import { createRouter, createWebHashHistory } from 'vue-router'
import QuemSouEu from '@/components/QuemSouEu.vue' //Home
import OQueFaco from '@/views/OQueFaco.vue'   //Pagina
import Hobbies from '@/views/Hobbies.vue'     //Pagina

const routes = [ //Array de objetos "rota"
  {
    path: '/',
    redirect: '/QuemSouEu'
  },
  {
    path: '/QuemSouEu',
    name: 'QuemSouEu',
    component: QuemSouEu,
    props: {
      nome:"João Thispersondoesnotexists",
      idade:43,
      morada:"Lisboa"
    }
  },
  {
    path: '/Readme',
    name: 'Readme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Readme.vue')
  },
  {
    path: '/OQueFaco',
    name: 'OQueFaco',
    component: OQueFaco
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: Hobbies
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
