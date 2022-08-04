<template>
  <div class="comparision-page">
    <div class="background-logo"></div>
    <div class="header">
      <h2>Nuxt Store Comparision</h2>
      <h3>Fetch Advice</h3>
    </div>
    <div class="tests">
      <Vue3StoreTest />
      <VuexStoreTest />
      <PiniaStoreTest />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vue3StoreTest from '~~/components/advice/vue3.vue';
import VuexStoreTest from '~~/components/advice/vuex.vue';
import '~~/assets/main.css';
import PiniaStoreTest from '~~/components/advice/pinia.vue';

export default defineComponent({
  components: { Vue3StoreTest, VuexStoreTest, PiniaStoreTest }
})
</script>

<style>
.comparision-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0 2rem;
  height: 100%;
}
h2 {
  color: var(--primary);
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.tests {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  width: 75%;
}
.test {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  flex: 1;
  transition: all 0.2s ease-in;
}
.test:hover {
  transform: scale(1.05);
}
.background-logo {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/vue-logo.png");
  background-size: 5%;
  background-color: #151616;
  opacity: 0.05;
  z-index: -1;
}
</style>