<template>
  <div class="test">
    <h3>☀️ VUE 3 STORE</h3>
    <p v-show="adviceState.id != -1">
      ID: {{ adviceState.id }} - {{ adviceState.content }}
    </p>
    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import adviceStore from '~~/store/vue3/advice';

export default defineComponent({
  name: 'Vue3StoreTest',
  setup() {
    async function fetchInfo() {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json() as any;
      adviceStore.changeAdvice({ id: data.slip.id, content: data.slip.advice });
    }
    return { fetchInfo, adviceState: adviceStore.getState() };
  },
})
</script>