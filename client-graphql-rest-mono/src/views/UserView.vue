<template>
    <div>I love you</div>
    <div v-if="loading">
        <p>Loading dulu</p>
    </div>
    <div v-else-if="error">
        <p>Error bosku {{ error.message }}</p>
    </div>
    <div v-else-if="result && result.user">
        <h1>Detail:</h1>
        <p>{{ user.name }}</p>
        <p>{{ user.phone }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
        <h1>Address:</h1>
        <p>{{ user.address.city }}</p>
        <p>{{ user.address.street }}</p>
        <h1>Company:</h1>
        <p>{{ user.company.bs }}</p>
    </div>
    <button @click="refetch()">Refresh data</button>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { USER_QUERY } from "../graphql/query";
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import type { IUser, IVariables } from "../types/index";

const route = useRoute();

const variables: Ref<IVariables> = ref({
    userId: route.params.id,
});

/**
 * pass the query and the variable
 * will be auto calling the server every 5 seconds
 * the data will be automatically updated.
 */
const { result, loading, error, refetch, onResult, onError } = useQuery(
    USER_QUERY,
    variables,
    {
        pollInterval: 5000,
    }
);

watch(result, () => {
    console.log(result.value.user);
});

const user = computed<IUser>(() => result.value?.user ?? []);

/**
 * enable event hooks
 * will be able to execute some codes when a specific
 * event occurs (result, error, etc)
 */

//this hook is called whenever a new result is available
onResult((result) => {
    console.log(result.data);
    console.log(result.loading);
});

//this hook is triggered when an error occurs
onError((err) => {
    console.log(err.graphQLErrors);
    console.log(err.networkError);
});
</script>

<style scoped></style>
