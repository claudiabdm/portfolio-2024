export function debounce(this: any, callback: (...args: any) => void, wait: number) {
    let timeoutId: number | null = null;
    return function debounceFn(this: any, ...args: any) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            callback.call(this, ...args);
        }, wait);
    };
}

export function throttle(this: any, callback: (...args: any) => void, wait = 0) {
    let intervalId: number | null = null;

    return function throttleFn(this: any, ...args: any) {
        if (intervalId === null) {
            callback.call(this, ...args);
            intervalId = setInterval(() => {
                if (intervalId) clearInterval(intervalId);
                intervalId = null;
            }, wait);
        }
    };
}