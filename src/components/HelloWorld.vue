<!--
 * @Author: danielZhang
 * @Date: 2024-04-08 16:11:36
 * @Description: Description
 * @FilePath: /vite-vue3/src/components/HelloWorld.vue
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-center text-xl font-bold mb-2 text-[#354a5e]">{{ msg }}</h1>

  <div class="text-center mb-2 text-[#bd34fe]">
    <button class="bg-[#58c3ff] py-1 px-2 text-white rounded-md" type="button" @click="count++">count is {{ count }}</button>
    <p class="mt-4 flex items-center justify-center">
      Edit
      <code class="py-1 px-2 mx-1 bg-[#daf2e7] text-xs text-[#354a5e] rounded-sm">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="text-center text-sm mb-2">
    Check out
    <a class="text-[#8891ff] font-bold" href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="text-center text-sm mb-2">
    Install
    <a class="text-[#8891ff] font-bold" href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="text-center text-sm">Click on the Vite and Vue logos to learn more</p>
</template>
