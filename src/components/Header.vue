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
<pre>
    pokemon : {{ pokemon }}
</pre>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';


const counterStore = useCounterStore();
const pokemonStore = usePokemonStore();
const counter = computed(() => counterStore.count);
const getCount = computed(() => counterStore.getCount);
const doubleCount = computed(() => counterStore.doubleCount);
const devideByTwo = computed(() => counterStore.devideBy(2));

const pokemon = computed(() => pokemonStore.pokemonDetails);

counterStore.$subscribe((mutation, state) => {
    console.log(mutation, state);
});

</script>