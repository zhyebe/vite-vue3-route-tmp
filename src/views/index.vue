<!--
 * @Author: danielZhang
 * @Date: 2024-04-08 16:28:21
 * @Description: Description
 * @FilePath: /vite-vue3-route-tmp/src/views/index.vue
-->
<template>
  <div class="py-2">
    <div class="flex items-center justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue + Tailwindcss" />
    <div class="flex p-4 text-white justify-between">
      <a @click="to('mine')" class="bg-[#1ac3c9] rounded-sm px-6 py-1">我的</a>
      <a @click="to('order')" class="bg-[#1ac3c9] rounded-sm px-6 py-1">订单</a>
      <a @click="to('login')" class="bg-[#1ac3c9] rounded-sm px-6 py-1">登录</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '@components/HelloWorld.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const to = (name: string) => {
  router.push({ name })
}
</script>