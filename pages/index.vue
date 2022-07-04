<template>
  <div class=" dark:bg-grayBody">
    <home/>
    <about/>
    <experience/>
    <jobs/>
    <skills/>
    <Loading>
      carregando...
    </Loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '~/components/about.vue';
import Experience from '~/components/experience.vue';
import Home from '~/components/home.vue';
import Jobs from '~/components/jobs.vue';

import Loading from '~/components/loading.vue';
import Skills from '~/components/skills.vue';


export default Vue.extend({
    name: "IndexPage",
    components: { Loading, Home, Experience, Jobs, About, Skills },

    mounted():void{
      
    }
});
</script>
