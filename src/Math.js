class Math {
    add(a, b) {
        if (a === 0) return -1;
        if (b === 0) return -1;
        return a + b;
    }

    sub(a, b) {
        if (a < b) return 0;
        return a - b;
    }
}

export default Math;
