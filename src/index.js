exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length < 1) {
        return 0;
    } else {
        return array.sort((a, b) => {
            return a - b;
        })[0];
    }
};

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length < 1) {
        return 0;
    } else {
        return array.sort((a, b) => {
            return a - b;
        })[array.length - 1];
    }
};

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length < 1) {
        return 0;
    } else {
        acc = 0;
        for (let i = 0; i < array.length; i++) {
            acc += array[i];
        }
        acc = acc / array.length;
        return acc;
    }
};
