// Example 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example 2
for (let i = 1; i <= 5; i++) {
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}

// Example 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}

// Example 4
for (let i = 1; i <= 13; i++) {
    if (i % 10 == 0) {
        break;
    }
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}

/* 
    Output 1 = 1 - 10
    Output 2 = (1 ** 2) - (5 ** 2)
    Output 3 = (1 ** 2), (3 ** 2), (5 ** 2), (7 ** 2), (9 ** 2)
    Output 4 = (1 ** 2) - (9 ** 2)  
*/