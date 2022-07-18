<template>
    <section id="home" class="h-auto sm:h-screen relative z-20 pt-20 lg:pt-0 pb-20 sm:pb-0">
        <div class="container flex flex-col-reverse sm:flex-row items-center justify-center flex h-full relative">
            <div class="w-full sm:w-1/2 flex flex-col items-start justify-start">
                <h1 class="font-lato text-3xl sm:text-4xl  lg:text-5xl uppercase text-center sm:text-left dark:text-white mt-4 sm:mt-0">{{$t('content.name')}}</h1>
                <p class="font-lato text-left text-base sm:text-2xl mt-8 dark:text-white">{{$t('content.title')}}</p>
                <div class="mt-8 flex items-center justify-center sm:justify-start w-full sm:w-auto">
                    <a href="https://www.linkedin.com/in/everton-guetierres-b57781174/" target="_blank" title="link linkedin">
                        <linkedin :size="80" fillColor="#0A66C2"/>
                    </a>
                    <a href="https://github.com/evertonvg" target="_blank" title="link github" class="ml-3">
                        <github :size="80" fillColor="#4078c0" />
                    </a>
                    <a href="https://web.whatsapp.com/send?phone=(53)%2098402-7438" target="_blank" title="whatsapp" class="ml-3">
                        <whatsapp :size="80" fillColor="#25D366" />
                    </a>
                </div>
            </div>
            <div class="w-full sm:w-1/2 flex items-center justify-center">
                <img src="../static/img/hcj.png" loading="lazy" :alt="`${$t('content.althcj')}`" class="w-40 md:w-60 lg:w-72"/>
            </div>
            <a href="#about" class="absolute bottom-[-50px] sm:bottom-[10px] lg:bottom-[50px] -left-[50%] transform -translate-x-[50%] flex items-center justify-center dark:text-white">
                {{$t('content.more')}} <chevron-double-down class="animate animate-bounce"/>
            </a>
        </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "home",
})
</script>