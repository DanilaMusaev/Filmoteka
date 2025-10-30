<script setup lang="ts">
    interface Props {
        movie: IMovie | undefined;
    }

    const props = defineProps<Props>();
</script>

<template>
    <div v-if="props.movie === undefined">The Movie is not Found</div>
    <div v-else class="singleMovie">
        <NuxtImg class="singleMovie__img" :src="props.movie.img" />
        <div class="singleMovie__desc">
            <div class="singleMovie__title-info">
                <h3 class="singleMovie__title">{{ props.movie.title }}</h3>
                <p class="singleMovie__info">{{ props.movie.year }}, {{ props.movie.genre }}</p>
            </div>
            <div class="singleMovie__about">
                <h4 class="singleMovie__secondary-title">About the Movie</h4>
                <p class="singleMovie__about-director">Director: {{ props.movie.director }}</p>
                <p class="singleMovie__about-writers">Writers: {{ props.movie.writer }}</p>
                <p class="singleMovie__about-actors">Actors: {{ props.movie.actors }}</p>
                <p class="singleMovie__about-duration">Runtime: {{ props.movie.duration }}</p>
            </div>
            <div class="singleMovie__plot">
                <h4 class="singleMovie__secondary-title">Plot</h4>
                <p class="singleMovie__plot-text">
                    {{ props.movie.plot }}
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.singleMovie {
    max-width: 1000px;

    display: flex;
    /* justify-content: center; */
    column-gap: 30px;
}

.singleMovie p {
    font-size: 16px;
    font-weight: 400;
    color: var(--text-secondary);
}

.singleMovie__secondary-title {
    margin-bottom: 8px;

    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
}

.singleMovie__img {
    max-height: 450px;
    
    border-radius: 20px;
    box-shadow: var(--sg-movie-shadow);
}

.singleMovie__desc {
    display: grid;
}

.singleMovie__title-info p {
    font-size: 20px;
    font-weight: 400;
    color: var(--text-secondary);
}

.singleMovie__title {
    font-size: 35px;
    font-weight: 700;
    color: var(--text-primary);
}

.singleMovie__plot p {
    word-wrap: break-word;
    max-width: 65ch;
}
</style>