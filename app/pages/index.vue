<script lang="ts" setup>
const movieService = useMovieService();
const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLTitleElement | null>(null);
const searched = ref<boolean>(false);
const loading = ref<boolean>(false);
const movieData = ref<IMovieShort[] | undefined>();

const onSearch = async (searchedFilm: string) => {
    if (sectionRef.value && titleRef.value) {
        sectionRef.value.classList.add('searched');
        titleRef.value.innerText = `Search results for: "${searchedFilm}"`;
        try {
            loading.value = true;
            const response = await movieService.searchMoviesByQuery(
                searchedFilm
            );
            movieData.value = response?.movies;
        } catch (err) {
            console.error('FETCH ERROR', err);
        } finally {
            loading.value = false;
            searched.value = true;
        }
    }
};
</script>

<template>
    <section ref="sectionRef" class="search-films">
        <h2 ref="titleRef" class="title-1">Find your film!</h2>
        <Search @search="onSearch" />
        <MovieGrid v-if="searched" :movies="movieData" />
    </section>
</template>

<style scoped>
.search-films {
    padding: 150px 150px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 0.15s ease-out;
}

.search-films.searched {
    padding: 100px 80px 50px;
    justify-content: start;
    align-items: start;

    min-height: unset;
}
</style>
