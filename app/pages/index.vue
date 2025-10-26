<script lang="ts" setup>
const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLTitleElement | null>(null);

const onSearch = (searchedFilm: string) => {
    if (sectionRef.value && titleRef.value) {
        sectionRef.value.classList.add('searched');
        titleRef.value.innerText = `Search results for: "${searchedFilm}"`;
    }
};

// Mock MovieData to check the markup
const moviesArr: IMovie[] = [
    {
        img: '/images/batmanKnight.jpg',
        title: 'Batman',
        year: '2009',
    },
    {
        img: '/images/Batman_v_Superman_Dawn_of_Justice.jpg',
        title: 'Batman vs Superman',
        year: '2016',
    },
    {
        img: '/images/Batman_returns_ver3.jpg',
        title: 'Batman Returns',
        year: '1992',
    },
];
</script>

<template>
    <section ref="sectionRef" class="search-films">
        <h2 ref="titleRef" class="title-1">Find your film!</h2>
        <Search @search="onSearch" />
        <MovieGrid :movies="moviesArr" />
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
