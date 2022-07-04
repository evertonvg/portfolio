<template>
	<footer class="p-8 bg-grayFoot">
		<p class="text-center flex items-center justify-center text-white">
			{{name}} -  <copyright fillColor="#ffffff"/>  {{$t('footer')}}
		</p>
	</footer>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name:'main-footer',
	data() {
		return {
			name: '2022 - Everton Vargas Guetierres' as string,
		}
	},
    methods:{
            

    }
});
</script>
