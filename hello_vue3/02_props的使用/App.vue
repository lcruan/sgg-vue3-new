<template>
  <!-- 务必看懂下面这一行代码 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
  <Person a="哈哈" :list="personList"></Person>
</template>

<script setup lang="ts">
import Person from './components/Person.vue';
import { type PersonInter, type Persons } from '@/types'
import { reactive } from 'vue';

let x = 9

// reacetive 可以传泛型来约束
let personList = reactive<Persons>([
  { id: 'fdasfadsf', name: '张三', age: 18},
  { id: 'fdasfadsf', name: '李四', age: 19},
  { id: 'fdasfadsf', name: '王五', age: 20}
])

</script>

<style scoped>
</style>
