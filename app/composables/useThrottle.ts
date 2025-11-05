export const useThrottle = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
): T => {
    let timeoutId: number | null = null;
    let lastExecTime = 0;

    return ((...args: any[]) => {
        const currentTime = Date.now();

        if (currentTime - lastExecTime < delay) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                lastExecTime = currentTime;
                func(...args);
            }, delay - (currentTime - lastExecTime));
        } else {
            lastExecTime = currentTime;
            func(...args);
        }
    }) as T;
};
