const { checkParity } = require('./checkParity');

test('Even number', () => {
  console.log = jest.fn(); // Перехватываем вывод в консоль
  checkParity(10);
  expect(console.log).toHaveBeenCalledWith('Число 10 четное!');
});

test('Odd number', () => {
  console.log = jest.fn(); // Перехватываем вывод в консоль
  checkParity(7);
  expect(console.log).toHaveBeenCalledWith('Число 7 нечетное!');
});

test('Zero', () => {
  console.log = jest.fn(); // Перехватываем вывод в консоль
  checkParity(0);
  expect(console.log).toHaveBeenCalledWith('Число 0 четное!');
});