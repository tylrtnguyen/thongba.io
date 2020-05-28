// execute function every 100 milliseconds
// https://blog.bitsrc.io/improve-your-react-app-performance-by-using-throttling-and-debouncing-101afbe9055
export const throttle = (func, wait = 100) => {
    let timer = null;
    return function(...args) {
        if (timer === null) {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        }
    }
};