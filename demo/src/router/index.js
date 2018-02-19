import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodList from './../view/GoodList.vue'
import Image from '@/view/Image'
import Title from '@/view/Title'
import Cart from '@/view/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/goods',
    //   name: 'GoodList',
    //   component: GoodList,
    //   children: [
    //     {
    //       path: 'image',
    //       name: 'Image',
    //       component: Image
    //     },
    //     {
    //       path: 'title',
    //       name: 'Title',
    //       component: Title
    //     }
    //   ]
    // },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/',
      name: 'Index',
      components: {
        default: GoodList,
        title: Title,
        image: Image
      }
    }
  ]
})
