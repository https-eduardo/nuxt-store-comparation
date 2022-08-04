<template>
  <div class="test">
    <h3>🍍 PINIA STORE</h3>
    <p v-show="adviceState.id != -1">
      ID: {{ adviceState.id }} - {{ adviceState.content }}
    </p>
    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useAdviceStore from '~~/store/pinia/advice';

export default defineComponent({
  name: 'PiniaStoreTest',
  setup() {
    const adviceStore = useAdviceStore();
    async function fetchInfo() {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json() as any;
      adviceStore.changeAdvice({ id: data.slip.id, content: data.slip.advice });
    }
    return { fetchInfo, adviceState: adviceStore };
  },
})
</script>
