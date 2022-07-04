<template>
    <div :class="['dark:bg-grayHead shadow-lg fixed top-0 left-0 w-full transition-all',!showMenu ? '-translate-y-16' : '']">
        <div class="container">
            <nav class="flex py-3">

                <div class="relative">
                    <div @click="toogleLanguages" class="!flex cursor-pointer" id="language-button"
                        aria-haspopup="true" :aria-expanded="showLanguages" aria-controls="language-items" data-name="lang"
                    >
                        <country-flag size='big' class="!m-0 !flex pointer-events-none" :country="$t('bandeira')"/>
                        <chevron-down fillColor="#313131" :class="['flex items-center pointer-events-none justify-center transition-transform',showLanguages ? 'rotate-180' : '']"/>
                    </div>
                    <ul aria-labelledby="language-button" id="language-items" role="menu"
                        v-show="showLanguages" class="mx-auto flex flex-col justify-start items-start gap-2 bg-white absolute dark:bg-grayFoot left-0 top-16 shadow-md">
                        <nuxt-link v-for="item in langItem" :key="item.id"
                            class="flex px-3 py-1 justify-center items-center hover:shadow-md" :to="localePath('/', item.route)">
                            <span class="min-w-[75px] dark:text-white">
                                {{item.lang}}
                            </span>
                            <country-flag class="!m-0" :country='item.flag'/>
                        </nuxt-link>
                    </ul>
                </div>
                
                <div class="flex items-center">
                    <sun fillColor="#313131"/>
                    <div @click="toggleDarkMode" :class="['rounded-full p-1 bg-white border dark:bg-grayBody border-grayHead border-solid w-14 flex cursor-pointer transition-all',isDarkMode ? 'items-end justify-end' : 'items-start justify-start']">
                        <div class="pointer-events-none rounded-full w-5 h-5 bg-grayFoot"></div>
                    </div>
                    <moon fillColor="#313131" class="rotate-180"/>
                </div>

                <div class="flex-1 flex items-center justify-end">
                    <nav>
                        <menu-icon size=40 class="cursor-pointer lg:hidden" v-show="!showMenuAnchor" @click="openMenuAnchor"/>
                        <window-close size=40 class="cursor-pointer lg:hidden" v-show="showMenuAnchor" @click="closeMenuAnchor" />
                        <transition name="fade">
                            <ul v-show="showMenuAnchor"
                             class="flex items-center justify-center fixed lg:static lg:flex-row 
                             lg:gap-4 top-[64px] left-0 flex-col w-full shadow-lg lg:shadow-none bg-white dark:bg-grayBody lg:dark:bg-grayHead">
                                <li v-for="item in $t('sections')" :key="item.id" class="uppercase dark:text-white w-full hover:shadow-lg lg:hover:shadow-none py-4 lg:py-0">
                                    <a :href="item.idSection" class="transition-colors hover:text-purple block text-center whitespace-nowrap">{{item.title}}</a>
                                </li>
                            </ul>
                        </transition>
                    </nav>
                </div>

            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Events } from 'vue/types/jsx';
export default Vue.extend({
    name:'main-menu',
    props:{
        isDarkMode:Boolean
    },
    data() {
        return {
            isDark:false,
            langItem: [
                {
                    id:1,
                    lang:'Português',
                    route:'pt',
                    flag:'bra'
                },
                {
                    id:2,
                    lang:'English',
                    route:'en',
                    flag:'usa'
                },
                {
                    id:3,
                    lang:'Español',
                    route:'es',
                    flag:"esp"
                }
            ],
            menuItem:[
                {
                    id:1,

                }
            ],
            showLanguages:false,
            showMenuAnchor:false,
            pageY:0,
            showMenu:true,
        }
    },
    watch:{
        pageY(oldP:number,newP:number){
            if(oldP>newP){
                this.showMenu = false
            }else{
                this.showMenu = true
            }  
        }
    },
    methods:{
        toggleDarkMode(){
            this.isDark = !this.isDark;
            this.$emit('update:isDarkMode',this.isDark)
            localStorage.darkMode = this.isDark;
        },
        verifyScroll(value:number):void{
            this.pageY = value;
        },
        toogleLanguages():void{
            this.showLanguages = !this.showLanguages
        },
        closeLanguages():void{
            this.showLanguages = false
        },
        openMenuAnchor():void{
            this.showMenuAnchor = true
        },
        closeMenuAnchor():void{
            this.showMenuAnchor = false
        }
    },
    created():void{
        this.isDark = this.isDarkMode
    },
    mounted():void{
        if(window.innerWidth>=1024){
            this.showMenuAnchor = true
        }
        window.addEventListener('scroll',()=>{
            this.verifyScroll(window.pageYOffset)
        })
        window.addEventListener('keydown',(ev:KeyboardEvent)=>{
            switch(ev.key){
                case 'Escape':
                    this.closeLanguages()
                break;
            }
        })
        window?.addEventListener('click',(ev:MouseEvent)=>{
            const elem = (ev.target as HTMLElement)
            if(elem.dataset.name!='lang'){
                this.closeLanguages()
            } 
        });        
    }

});
</script>
