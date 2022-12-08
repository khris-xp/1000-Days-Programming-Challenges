/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

for (let i = 1; i <= 5; i++) {
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}

for (let i = 1; i <= 13; i++) {
    if (i % 10 == 0) {
        break;
    }
    let answer = i ** 2;
    console.log(i + " ** 2 : " + answer);
}