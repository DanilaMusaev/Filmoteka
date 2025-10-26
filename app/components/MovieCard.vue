<script setup lang="ts">
interface Props {
    movie: IMovie;
}

const props = defineProps<Props>();
</script>

<template>
    <article class="movie__card">
        <NuxtImg class="movie__card-img" :src="props.movie.img" />
        <div class="movie__card-desc">
            <p class="movie__card-title">{{ props.movie.title }}</p>
            <p class="movie__card-year">{{ props.movie.year }}</p>
        </div>
    </article>
</template>

<style scoped>
.movie__card {
    max-width: 200px;

    cursor: pointer;
}

.movie__card:hover .movie__card-img {
    box-shadow: var(--card-shadow-hover);
}

.movie__card-img {
    max-height: 250px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);

    transition: box-shadow 0.3s ease-out;
}

.movie__card-desc {
    padding-left: 5px;
}

.movie__card-title {
    font-size: 18px;
    font-weight: 600;

    transition: color 0.3s ease-out;
}

.movie__card-year {
    color: var(--text-secondary);
}
</style>
