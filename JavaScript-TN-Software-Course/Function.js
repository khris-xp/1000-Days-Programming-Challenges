// Example 1

function Addition(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
}

Addition(1, 2)

// Exercise

function getPyramidArea(length, width, height) {
    let baseArea = length * width;
    let pyramidVolume = (1 / 3) * baseArea * height;
    console.log(pyramidVolume);
}

getPyramidArea(2, 2, 3);
getPyramidArea(4, 4, 3);