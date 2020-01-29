import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


// Views - Components
const Cards = () => import('@/views/base/Cards')
const School = () => import('@/views/base/School')
const AddSchool = () => import('@/views/base/AddSchool')
const SchoolYear = () => import('@/views/base/SchoolYear')
const Login = () => import('@/views/pages/Login')
const SchoolYearList = () => import('@/views/base/SchoolYearList')
Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      color:'green',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
          ,props:true
        },
        
       
        
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            
            {
              path: 'School',
              name: 'School',
              component: School
            },
            {
              path: 'AddSchool/:id?',
              name: 'AddSchool',
              component: AddSchool,
              props: true
              }, {
              path: 'SchoolYear',
              name: 'SchoolYear',
              component: SchoolYear
            },
            {
              path: 'SchoolYearList',
              name: 'School Year List',
              component: SchoolYearList
              ,props:true
            },
         
          ]
        },
      
        
        
      ]
    },
    {
      path: '/',
      redirect: '/',
      name: '',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
 
  ]
}

