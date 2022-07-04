<template>
  <div class="flex items-center w-full justify-center h-screen bg-white dark:bg-grayBody">
    <span>
      {{$t('pagina2')}}
    </span>
    <Loading>
      carregando...
    </Loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from '~/components/loading.vue';


export default Vue.extend({
    name: "page2",
    components: { Loading },
    data(){
      return {
        lang:''
      }
    },
    mounted():void{
      console.log(this.lang)
    }
});
</script>
