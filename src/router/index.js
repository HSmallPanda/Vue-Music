import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import MusicRank from '@/pages/musicRank'
import Home from '@/pages/home'
import Singer from '@/pages/singer'
import HotMusic from '@/pages/musicType/HotMusic'
import NewMusic from '@/pages/musicType/NewMusic'
import RockMusic from '@/pages/musicType/RockMusic'
import SingerInfo from '@/pages/singer/singerinfo'
import MusicPaly from '@/pages/MusicPlay'
import Search from '@/pages/search'
import SearchView from '@/pages/search/SearchView'
import MoreList from '@/pages/MoreList'
Vue.use(Router)

export default new Router({
  routes: [
  	{
		path:"/",
		redirect:"/home",
		component: Index,
		children:[
		    {
				path:"home",
				component: Home,
			},
			{
				path:"singer",
				component: Singer,
			},
			{
				path:"singerinfo/:singerid",
				name:"singerinfo",
				component: SingerInfo,
			},
			{
				path:"more",
				name:"more",
				component: MoreList,
			},
			{
				path:"search",
				name:"search",
				component: Search,
				children:[
				{
					path:"searchView/:searchContent",
					name:"searchView",
					component: SearchView,
				}]
			},
			{
		      	path: '/musicRank',
		      	name: 'musicRank',
		      	component: MusicRank,
		      	redirect:"/musicRank/hot",
		      	children:[
			    	{
			     	 	path: 'hot',
			     	 	component: HotMusic,
			        },
			        {
			      		path: 'new',
			      		component: NewMusic,
			        },
			        {
			      		path: 'rock',
			      		component: RockMusic,
			        }
		      	]
		    }
		]
	},
	{
		path:"/play/:songid",
		name:"musicPlay",
		component: MusicPaly,
	}
  ]
})
