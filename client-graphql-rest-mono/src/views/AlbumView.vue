<template>
    <div>
        <p>{{ albums.albumId }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, type Ref } from "vue";
import type { IAlbumId } from "@/types";

const route = useRoute();
const albums: Ref<IAlbumId> = ref({
    albumId: route.params.albumId,
});
</script>

<style scoped></style>
