<template>
    <div>
        <div v-for="album in albums" :key="album.id">
            <p class="album__item" @click="router.push(`albums/${album.id}`)">
                {{ album.title }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { QUERY_ALBUMS } from "@/graphql/query";
import { computed, watch } from "vue";
import type { IAlbum } from "@/types";
import { useRouter } from "vue-router";

const router = useRouter();
const { result } = useQuery(QUERY_ALBUMS);

watch(result, () => {
    console.log(result.value);
});

const albums = computed<IAlbum[]>(() => result.value.albums);
</script>

<style scoped lang="scss">
.album__item {
    cursor: pointer;
    &:hover {
        color: blue;
    }
}
</style>
