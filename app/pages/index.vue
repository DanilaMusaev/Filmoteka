<script lang="ts" setup>
import { ROUTES } from '~/config/routes';

const route = useRoute();
const router = useRouter();
const movieService = useMovieService();
const sectionRef = ref<HTMLElement>();

// Получаем поисковый запрос из URL
const searchQuery = computed(() => route.query.search?.toString() || '');

// Загрузка данных при наличии query
const { data: movieData, pending: loading } = useAsyncData(
    'search-movies',
    async () => {
        if (!searchQuery.value) return null;
        return await movieService.searchMoviesByQuery({
            title: searchQuery.value,
        });
    },
    {
        watch: [searchQuery],
    }
);

// Обработчик поиска
const onSearch = (filmTitle: string) => {
    if (filmTitle.trim()) {
        // Обновляем URL с query параметром
        router.replace({
            path: ROUTES.main,
            query: { search: filmTitle.trim() },
        });
    } else {
        // Если запрос пустой - очищаем
        router.replace({ path: ROUTES.main });
    }

    // Добавляем класс для анимации
    sectionRef.value?.classList.add('searched');
};

// Вычисляемые свойства
const hasSearched = computed(() => !!searchQuery.value);
const pageTitle = computed(() =>
    hasSearched.value
        ? `Search result for the query: "${searchQuery.value}"`
        : 'Find your film!'
);
</script>

<template>
    <section
        ref="sectionRef"
        class="search-films"
        :class="{ searched: hasSearched }"
    >
        <h2 class="title-1">{{ pageTitle }}</h2>
        <Search @search="onSearch" />
        <MovieGrid v-if="hasSearched" :movies="movieData?.movies" />
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
}
</style>
