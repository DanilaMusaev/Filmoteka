export const useScrollTop = (threshold = 10) => {
    const isTop = ref(true);

    const checkScroll = () => {
        isTop.value = window.scrollY < threshold;
    };

    onMounted(() => {
        window.addEventListener('scroll', checkScroll, { passive: true });
        checkScroll();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', checkScroll);
    });

    return {
        isTop: readonly(isTop),
    };
};
