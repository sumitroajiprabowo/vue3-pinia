<template>
This is footer

<button @click="increment">Increment</button>

<button @click="decrement">Decrement</button>

<button @click="reset">Reset</button>
</template>

<script setup>

import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();
const increment = () => {
    counter.$patch((state) => {
        state.count++;
    });
}

const decrement = () => {
    counter.$patch((state) => {
        state.count--;
    });
}

const reset = () => {
    counter.$patch((state) => {
        state.count = 0;
    });
}

</script>