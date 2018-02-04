<template>
  <q-layout
		ref="layout"
    :style="{backgroundColor: backgroundColor}"    
    :view="view"
    :left-breakpoint="leftBreakpoint"
    :right-breakpoint="rightBreakpoint"
    :reveal="reveal"
  >

		<drawer slot="left" v-if="leftScroll"
			style="width: 100%; height: 100%">
		</drawer>

		<q-toolbar slot="header">
			<q-btn class="col col-auto" flat @click="openDrawer">
				<q-icon class="fa fa-bars" />
			</q-btn>
			<q-toolbar-title class="title">
				<-- Open the Drawer
				<span 
					slot="subtitle">
						When the window is widened, hide the "bars" icon.
				</span>
			</q-toolbar-title>
		</q-toolbar>

		<q-tabs slot="navigation" class="shadow-0" inverted>
			<q-route-tab to="/home/user" exact slot="title" label="User" />
			<q-route-tab to="/home/profile" exact slot="title" label="Profile" />
			<q-route-tab to="/home/posts" exact slot="title" label="Posts" />		
		</q-tabs>

		<router-view />
		
	</q-layout>
</template>

<script>
	import { 
		QBtn, 
		QIcon, 
		QInput, 
		QLayout, 
		QScrollArea,
		QTabs,
		QRouteTab,
		QToolbar, 
		QToolbarTitle 
	} from 'quasar-framework'
	// import Mask from 'vanilla-mask'
	import drawer from './Drawer'
	export default {
  name: 'home',
	components: {
		 QBtn, 
		 QIcon, 
		 QInput, 
		 QLayout, 
		 QScrollArea, 
		 QTabs,
		 QRouteTab,
		 QToolbar, 
		 QToolbarTitle, 
		 drawer
	},
  data () {
    return {
			view: "lHh LpR fff",
			reveal: false,
			leftScroll: true,
			leftBreakpoint: 796,
			rightBreakpoint: 1200,
			backgroundColor: 'whitesmoke',
			drawerOpen: false
    }
  },
	methods: {
		openDrawer() {
			// this.drawerOpen = !this.drawerOpen
			this.$refs.layout.toggleLeft()
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title{
	vertical-align: center;
}
@media(min-width: 796px) { 
	.col{
		float: none;
		margin:0;
		width: 100%;
		display: none;
	}
}
</style>