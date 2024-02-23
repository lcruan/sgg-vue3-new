<script setup lang="ts">
import Person from './components/Person.vue';
import { type PersonInter, type Persons } from '@/types'

// 定义对象
let person: PersonInter = {
  id: 'adfadfasdf',
  name: '张三',
  age: 18
}

// 定义一个变量叫 personList, 是一个数组， 并且数组的每一项都符合PersonInter接口规范
// Array<PersonInter>这种写法，如果接口太多就不太合适，还有高级的写法，如personList1
let personList: Array<PersonInter> = [
  { id: 'fdasfadsf', name: '张三', age: 18},
  { id: 'fdasfadsf', name: '李四', age: 19},
  { id: 'fdasfadsf', name: '王五', age: 20}
]

// 高级写法：利用接口自定义类型来约束
let personList1: Persons = [
  { id: 'fdasfadsf', name: '张三', age: 18},
  { id: 'fdasfadsf', name: '李四', age: 19},
  { id: 'fdasfadsf', name: '王五', age: 20}
]


</script>

<template>
  <Person></Person>
</template>

<style scoped>
</style>
