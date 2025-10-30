<script lang="ts" setup>
interface Emits {
    (e: 'search', searchedFilm: string): void;
}

const emit = defineEmits<Emits>();

const search = ref<string>('');

const emitSearchAndCleanValue = () => {
    emit('search', search.value);
    search.value = '';
}

const onClick = () => {
    if (search.value.trim()) {
        emitSearchAndCleanValue();
    }
};

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && search.value.trim()) {
            emitSearchAndCleanValue();
    }
}
</script>

<template>
    <div class="search-input__wrapper">
        <UiMyInput
            v-model="search"
            custom-class="search-input__input"
            type="text"
            placeholder="Write here film name..."
            @keydown="onKeydown"
        />
        <button @click="onClick" class="search__button">Find</button>
    </div>
</template>

<style scoped>
.search-input__wrapper {
    min-width: 450px;
    position: relative;
    margin-top: 25px;
    padding-right: 50px;
}

.search-input__input {
    padding: 10px 35px 10px 15px;
    width: 100%;

    color: var(--text-primary);
    font-size: 18px;

    background-color: var(--white);
    border-radius: 20px;
}

.search-input__input::placeholder {
    color: var(--text-placeholder);
}

.search__button {
    position: absolute;
    right: 0;

    padding: 10px 25px;
    color: var(--text-white);
    font-size: 18px;
    font-weight: 500;

    background-image: linear-gradient(
        130deg,
        var(--accent-primary),
        var(--accent-secondary),
        var(--accent-secondary),
        var(--accent-primary)
    );
    background-size: 300% 300%;
    background-position: 0% 0%;
    border-radius: 20px;

    transition: all 0.2s ease-out;
}

.search__button:hover {
    background-position: 100% 100%;
}
</style>
