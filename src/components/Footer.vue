<template>
This is footer

<button @click="increment">Increment</button>

<button @click="decrement">Decrement</button>

<button @click="reset">Reset</button>
<br />
<button @click="incrementWithAction">Increment With Action</button>
<button @click="decrementWithAction">Decrement With Action</button>
<button @click="incrementByWithAction(2)">Increment With Number</button>

<hr />

<button @click="fetchPokemon('ditto')">Fetch Pokemon</button>
<button @click="resetPokemon">Reset Pokemon</button>
</template>

<script setup>

import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';

const counter = useCounterStore();
const pokemon = usePokemonStore();

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

const incrementWithAction = () => {
    counter.increment();
}

const decrementWithAction = () => {
    counter.decrement();
}

const incrementByWithAction = (amount) => {
    counter.incrementBy(amount);
}

const fetchPokemon = (name) => {
    pokemon.getPokemonDetails(name);
}

const resetPokemon = () => {
    pokemon.$reset();
}
</script>