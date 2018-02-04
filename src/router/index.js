import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

const Welcome = { template: '<div><h3>Welcome</h3></div>' }
const UserHome = { template: '<div><h3>Home</h3></div>' }
const UserProfile = { template: '<div><h3>Profile</h3></div>' }
const UserPosts = { template: '<div><h3>Posts</h3></div>' }
const Error404 = { template: '<div><h3>Error: 404</h3></div>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {      
      path: '/home', component: Home,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: 'user', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts },
        // Not found in children
        { path: '*', component: Error404 }
      ]
    },
    { path: '*', component: Error404 } // Not found in parent
  ]
})
