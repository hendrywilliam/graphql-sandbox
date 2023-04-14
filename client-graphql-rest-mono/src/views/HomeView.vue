<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ALL_USERS_QUERY } from "@/graphql/query";
import { watch } from "vue";

const { result } = useQuery(ALL_USERS_QUERY);

watch(result, () => {
    console.log(result.value.users);
});
</script>

<template>
    <main>
        <p>I love you</p>
        <ul>
            <li v-for="item in result.users">{{ item.name }}</li>
        </ul>
    </main>
</template>
