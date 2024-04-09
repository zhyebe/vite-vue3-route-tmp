<!--
 * @Author: danielZhang
 * @Date: 2024-04-09 13:38:38
 * @Description: Description
 * @FilePath: /vite-vue3/src/views/order/index.vue
-->
<template>
  <div class="p-4">
    <div class="flex bg-[#f0f0f0] px-2 py-1 rounded-sm items-center justify-between text-gray-500 mb-4">
      <router-link class="underline" to="/order/payOrder">支付订单</router-link>
      <router-link class="underline" to="/order/returnOrder">退款订单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>