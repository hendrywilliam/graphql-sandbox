<template>
    <main>
        <div v-if="loading">
            <p>Sabar ngab..</p>
        </div>
        <div v-else-if="error">
            <p>Error: {{ error.message }}</p>
        </div>
        <ul v-else-if="result && result.users" class="list__characters">
            <li v-for="item in result?.users" :key="item.id" class="list__item">
                <p>
                    {{ item.name }} | <span>{{ item.username }}</span>
                </p>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ALL_USERS_QUERY } from "@/graphql/query";
import { watch } from "vue";

const { result, loading, error } = useQuery(ALL_USERS_QUERY);

/**
 * watch is lazy by default, it contains 3 params,
 * watcher sources (it could be multiple sources)
 * callback (which also contains 3 args)
 * and option (optional)
 */

watch(result, () => {
    console.log(result.value);
});

/**
 * simplify access to the result and provide default val
 * using nullish coallescing
 *
 * ex:
 * const users = computed(()=> result.value?.users ?? [])
 */
</script>

<style scoped lang="scss">
.list {
    &__characters {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px;
    }

    &__item {
        padding: 10px;
        border: 1px solid black;
    }
}
</style>
