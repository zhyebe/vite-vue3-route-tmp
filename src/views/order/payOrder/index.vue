<!--
 * @Author: danielZhang
 * @Date: 2024-04-09 13:39:54
 * @Description: Description
 * @FilePath: /vite-vue3/src/views/order/payOrder/index.vue
-->
<template>
  <div class="flex items-center text-[#0e82d7] mb-4 text-sm">
    <router-link class="underline mr-5" to="/order/payOrder/paySuccess">成功订单</router-link>
    <router-link class="underline" to="/order/payOrder/payFail">失败订单</router-link>
  </div>
  <router-view></router-view>
</template>