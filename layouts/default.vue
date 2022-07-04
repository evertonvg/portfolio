<template>
	<div :class="[isDarkMode ? 'dark' : '']" >
		<Menu :isDarkMode.sync="isDarkMode"/>
		<main>
			<transition name="fade">
				<Nuxt/>
			</transition>
		</main>
		<Footer/>
	</div>
</template>
<script lang="ts">
import { create } from 'domain';
import Vue from 'vue';
import Footer from '~/components/footer.vue';
import Menu from '~/components/menu.vue';
export default Vue.extend({
    name: "main-page",
    data() {
        return {
            isDarkMode:false
        };
    },
    components: { Menu, Footer },
	created():void{
		
	},
	mounted():void{
		if(localStorage.darkMode=='true'){
			this.isDarkMode = true
		}else{
			this.isDarkMode = false
		}
	}
});
</script>
<style lang="postcss">
*{
	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
}
html{
	scroll-behavior: smooth;
}
.container{
	@apply mx-auto max-w-full px-5;
}
@media(min-width: 600px){
	.container{
		@apply max-w-xl;
	}
}
@media(min-width: 768px){
	.container{
		@apply max-w-2xl;
	}
}
@media(min-width: 992px){
	.container{
		@apply max-w-4xl px-0;
	}
}
@media(min-width: 1200px){
	.container{
		@apply max-w-6xl;
	}
}
@media(min-width: 1400px){
	.container{
		@apply max-w-7xl;
	}
}
.fade-enter-active, .fade-leave-active {
    @apply transition ease-in duration-300;
}
.fade-enter-from, .fade-leave-to{
    @apply opacity-0 transform -translate-y-3;
}
.fade-enter-to, .fade-leave-from{
    @apply opacity-100 transform translate-y-0;
}
</style>