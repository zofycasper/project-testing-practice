const average = (array) => {
    return array.reduce((acc, curr) => acc + curr) / array.length;
};

const getMin = (array) => {
    return array.reduce((a, b) => {
        return Math.min(a, b);
    });
};

const getMax = (array) => {
    return array.reduce((a, b) => {
        return Math.max(a, b);
    });
};

const getLength = (array) => {
    return array.length;
};

const number = [1, 8, 3, 4, 2, 6];

const analyzeArray = {
    average: average(number),
    min: getMin(number),
    max: getMax(number),
    length: getLength(number),
};

console.log(analyzeArray);

module.exports = analyzeArray;
