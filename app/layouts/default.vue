<template>
    <div
        class="page-wrapper"
        :style="{ backgroundImage: `url('/images/background.jpg')` }"
    >
        <LayoutHeader />
        <slot></slot>
    </div>
</template>

<style scoped>
.page-wrapper {
    min-height: 100vh;
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
