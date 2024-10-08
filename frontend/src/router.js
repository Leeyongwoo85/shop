
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);




import ProductInventoryManager from "./components/listers/ProductInventoryCards"
import ProductInventoryDetail from "./components/listers/ProductInventoryDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [


            {
                path: '/products/inventories',
                name: 'ProductInventoryManager',
                component: ProductInventoryManager
            },
            {
                path: '/products/inventories/:id',
                name: 'ProductInventoryDetail',
                component: ProductInventoryDetail
            },




    ]
})
