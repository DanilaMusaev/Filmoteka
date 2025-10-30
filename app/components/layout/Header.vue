<script setup lang="ts">
import { ROUTES } from '~/config/routes';

const { isTop } = useScrollTop();
</script>

<template>
    <header class="header" :class="{ top: isTop }">
        <div class="header__inner">
            <NuxtLink :to="ROUTES.main" class="logo"> Filmoteka </NuxtLink>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    backdrop-filter: blur(20px);
    box-shadow: 0px 5px 8px 2px rgba(255, 255, 255, 0.3);

    transition: all 0.3s ease-out;
}
.header.top {
    padding: 10px;
    backdrop-filter: unset;
    box-shadow: unset;
}

.header__inner {
    padding: 10px 40px;

    display: flex;
    justify-content: space-between;
}

.logo {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-white);
}
</style>
