<template>
This is header
<pre>
   state : {{ counter }}
</pre>
<pre>
   getters : {{ getCount }}
</pre>
<pre>
    getters : {{ doubleCount }}
</pre>
<pre>
    getters : {{ devideByTwo }}
</pre>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
const counter = computed(() => counterStore.count);
const getCount = computed(() => counterStore.getCount);
const doubleCount = computed(() => counterStore.doubleCount);
const devideByTwo = computed(() => counterStore.devideBy(2));

counterStore.$subscribe((mutation, state) => {
    console.log(mutation, state);
});

</script>