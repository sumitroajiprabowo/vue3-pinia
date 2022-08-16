<template>
This is header
<pre>
    {{ counter }}
</pre>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
const counter = computed(() => counterStore.count);

counterStore.$subscribe((mutation, state) => {
    console.log(mutation, state);
});
</script>