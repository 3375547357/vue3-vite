export const routes = [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'../views/HomeView.vue')
    }, 
    {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "Home" */'../views/AboutView.vue')
    },
    {
    path: '/ceshi',
    name: 'Ceshi',
    component: () => import('../views/CeshiView.vue')  
    },
	{
	path: '/ceshi2',
	name: 'Ceshi2',
	component: () => import('../views/Ceshi2View.vue')
	},
]
