export const capitalize = (str) => {
    if (typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};

export function formatGen(str) {
    return capitalize(str.split('-')[0]);
};

export function sanitizeGen(x) {
    if (isNaN(x)) {
        return 0;
    }
    return x;
};