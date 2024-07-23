<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"/> -->
    <!-- 第5行顶层实现代码如下   v-model底层原理是动态value值配合input事件-->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 本质写法   update:modelValue就是一个事件名-->
    <!-- <AtguiguInput
      :modelValue="username"
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AtguiguInput from "./AtguiguInput.vue";

let username = ref("zhangsan");
let password = ref('123456')
</script>

<style scoped></style>
