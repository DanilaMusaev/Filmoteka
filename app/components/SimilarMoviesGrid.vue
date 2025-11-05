<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

interface Props {
    similarMovies: IMovieShort[] | undefined;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="similarMovies-wrapper">
        <h4 class="similarMovies-title">Related Movies:</h4>
        <ClientOnly>
            <Swiper
                :space-between="16"
                :slides-per-view="6"
                :breakpoints="{
                    320: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 6 },
                }"
            >
                <SwiperSlide v-for="mv in props.similarMovies" :key="mv.id">
                    <MovieCard :movie="mv" />
                </SwiperSlide>
            </Swiper>
        </ClientOnly>
    </div>
</template>

<style scoped>
.similarMovies-wrapper {
    margin-top: 25px;
}

.similarMovies-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
}

/* Критически важные стили для Swiper */
:deep(.swiper) {
    max-width: 1000px;
    padding: 10px 10px;
}

:deep(.swiper-wrapper) {
    box-sizing: border-box;
}

:deep(.swiper-slide) {
    width: auto !important;
    height: auto !important;
    flex-shrink: 0;
}

:deep(.swiper-slide > *) {
    width: 150px;
    flex-shrink: 0;
}
</style>
