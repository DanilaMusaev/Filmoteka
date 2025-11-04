<template>
    <div
        class="page-wrapper"
    >
        <LayoutHeader />
        <slot></slot>
    </div>
</template>

<style scoped>
.page-wrapper {
    min-height: 100vh;
    
    background-image: -webkit-image-set(
        url('/images/background.jpg') 1x,
        url('/images/background@2x.jpg') 2x
    );
    background-image: image-set(
        url('/images/background.jpg') 1x,
        url('/images/background@2x.jpg') 2x
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
