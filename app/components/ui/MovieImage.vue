<script setup lang="ts">
interface Props {
    src: string;
    title: string;
    class: string;
}

const props = defineProps<Props>();

const actualSrc = ref(props.src);

const loadingPlaceholder = '/images/film-placeholder.png';
const errorFallback = '/images/film-fallback.png';

const handleImgError = () => {
    actualSrc.value = errorFallback;
};
</script>

<template>
    <NuxtImg
        :class="props.class"
        :src="actualSrc"
        :alt="props.title"
        @error="handleImgError"
        :custom="true"
        v-slot="{ src, isLoaded, imgAttrs }"
    >
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />
        <img v-else v-bind="imgAttrs" :src="loadingPlaceholder" />
    </NuxtImg>
</template>