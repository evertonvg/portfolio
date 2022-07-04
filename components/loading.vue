<template>
    <transition name="fade">
        <div v-show="showModalLoading"
            class="fixed top-0 left-0 w-screen h-screen z-50
                flex items-center justify-center opacity-70 bg-white">
                <slot/>
        </div>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'loading',
    data() {
        return {
            showModalLoading: false
        }
    },
    methods:{
        openModal():void{
            this.showModalLoading = true
        },
        closeModal():void{
            this.showModalLoading = false
        }
    }
});
</script>