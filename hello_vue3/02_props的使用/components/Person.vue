<template>
    <h2>{{ a }}</h2>
    <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }} --- {{ item.age }}</li>
    </ul>
</template>


<script setup lang="ts">
import { Persons } from '@/types';

// 1. 接收 a
// defineProps(['a'])

// 2. 接收 a 和 list 同时将 a保存起来
// defineProps有返回值，返回一个对象，包含所有接收的内容
// let x = defineProps(['a', 'list'])
// console.log(x.a);

// 3. 接收 list + 限制类型
// 接收list 并且要符合 Persons类型
// defineProps<{ list: Persons}>()

// 4. 接收 list + 限制类型 + 限制必要性 + 指定默认值
// (1) 可传可不传 -> list?
// (2) 如果不传，指定默认值, withDefaults(defineProps, 默认值)
withDefaults(defineProps<{ list?: Persons}>(), {
    // 不能直接写数组，必须是一个函数返回一个对象
    list: () => [{ id: 'fdafds', name: '李四', age: 18}]
}) 


</script>