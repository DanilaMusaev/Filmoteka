<script lang="ts" setup>
import { ROUTES } from '~/config/routes';

const route = useRoute();
const router = useRouter();
const movieService = useMovieService();
const sectionRef = ref<HTMLElement>();

// Получаем поисковый запрос из URL
const searchQuery = computed(() => route.query.search?.toString() || '');

const currentPage = ref(1);
const totalResults = ref(0);
const allMovies = ref<any[]>([]);
const hasMore = ref(true);

// Загрузка данных при наличии query
const {
    data: movieData,
    pending: loading,
    refresh,
} = useAsyncData(
    'search-movies',
    async () => {
        if (!searchQuery.value) return null;
        const response = await movieService.searchMoviesByQuery({
            title: searchQuery.value,
            page: currentPage.value,
        });

        if (response) {
            totalResults.value = Number(response.totalResults);
            if (currentPage.value === 1) {
                allMovies.value = response.movies || [];
            } else {
                allMovies.value = [
                    ...allMovies.value,
                    ...(response.movies || []),
                ];
            }

            hasMore.value =
                response.movies &&
                response.movies.length > 0 &&
                allMovies.value.length < totalResults.value;
        }

        return response;
    },
    {
        watch: [searchQuery, currentPage],
    }
);

// Загрузка следующей страницы
const loadMore = () => {
    if (!loading.value && hasMore.value) {
        currentPage.value++;
    }
};

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

// Хендлер для бесконечного скролла.
const handleScroll = () => {
    if (loading.value || !hasMore.value) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollThreshold = 100;

    if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
        loadMore();
    }
};

const throttleHandleScroll = useThrottle(handleScroll, 100);

// При изменении названия фильма обнуляем параметры
watch(searchQuery, () => {
    currentPage.value = 1;
    allMovies.value = [];
    totalResults.value = 0;
    hasMore.value = true;
});

// Вычисляемые свойства
const hasSearched = computed(() => !!searchQuery.value);
const pageTitle = computed(() =>
    hasSearched.value
        ? `Search result for the query: "${searchQuery.value}"`
        : 'Find your film!'
);
const showMovieGrid = computed(
    () =>
        hasSearched.value &&
        movieData.value?.movies &&
        movieData.value.movies.length > 0
);
const showNoResults = computed(
    () =>
        hasSearched.value &&
        !loading.value &&
        movieData.value?.movies &&
        movieData.value.movies.length === 0
);

// Добавляем и удаляем обработчик скролла
onMounted(() => {
    window.addEventListener('scroll', throttleHandleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', throttleHandleScroll);
});
</script>

<template>
    <section
        ref="sectionRef"
        class="search-films"
        :class="{ searched: hasSearched }"
    >
        <h2 class="title-1">{{ pageTitle }}</h2>
        <Search @search="onSearch" />

        <div v-if="loading && currentPage === 1" class="movie-loading">
            <UiMovieLoader />
        </div>

        <MovieGrid v-if="showMovieGrid" :movies="allMovies" />

        <div v-if="showNoResults" class="no-results">
            Nothing was found based on the results of the query.
        </div>

        <div v-if="loading && currentPage > 1" class="loading-more">
            <UiMovieLoader />
        </div>

        <div
            v-if="hasSearched && !hasMore && allMovies.length > 0"
            class="end-of-results"
        >
            <p>All movies loaded</p>
        </div>
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

.movie-loading {
    padding-top: 80px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-more {
    padding: 40px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.end-of-results {
    padding: 40px 0;
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
}

.no-results {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary);
    font-style: italic;
    width: 100%;
}
</style>
