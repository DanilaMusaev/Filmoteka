<template>
    <header class="header">
        <div class="header__inner">
            <NuxtLink to="/" class="logo"> Filmoteka </NuxtLink>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: padding 0.3s ease-out;
}
.header.top {
    padding: 10px;
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
