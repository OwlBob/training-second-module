import { capitalize } from '../src/capitalize.js';

// Первое утверждение (проверка на пустую строку)
if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

// Второе утверждение (проверка на слово)
if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');

capitalize('hello');