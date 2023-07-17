function checkParity(N) {
    if (N % 2 === 0) {
        console.log(`Число ${N} четное!`);
    } else {
        console.log(`Число ${N} нечетное!`);
    }
}

// Тест-кейсы
checkParity(10); // Число 10 четное!
checkParity(7);  // Число 7 нечетное!
checkParity(0);  // Число 0 четное! 