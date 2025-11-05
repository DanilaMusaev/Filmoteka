<script setup lang="ts">
import { ROUTES } from '~/config/routes';

interface Props {
    movie: IMovieShort;
}

const props = defineProps<Props>();
</script>

<template>
    <article
        @click="$router.push(ROUTES.moviesId(props.movie.id))"
        class="movie__card"
    >
        <UiMovieImage
            :src="props.movie.img"
            :title="props.movie.title"
            class="movie__card-img"
        />
        <div class="movie__card-desc">
            <p class="movie__card-title">{{ props.movie.title }}</p>
            <p class="movie__card-year">{{ props.movie.year }}</p>
        </div>
    </article>
</template>

<style>
.movie__card {
    max-width: 200px;

    cursor: pointer;
}

.movie__card:hover > img {
    box-shadow: var(--card-shadow-hover);
}

.movie__card-img {
    height: 250px;
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
    word-wrap: break-word;

    transition: color 0.3s ease-out;

    /* Ограничение текста до 2 строк */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 1.4;
    max-height: 2.8em; /* 2 строки * line-height */
    word-break: break-word;
}

.movie__card-year {
    color: var(--text-secondary);
}
</style>
