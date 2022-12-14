# Проект по тестовому заданию на вакансию Frontend-developer в веб-студию Oxem

## Запуск в браузере

[Демо](https://mich-man.ru/projects/oxem-test/index.html)

### Задание: 

 -Сверстать калькулятор лизинга авто по макету Figma

### Общие требования:

 +
  -Калькулятор должен инициализироваться с указанными значениями по умолчанию;
  -В каждое поле можно ввести значение как с клавиатуры, так и с помощью ползунка;
  -При выборе значения с помощью ползунка, все числа должны пересчитываться динамически в процессе движения ползунка, а не только после его остановки;
  -У каждого поля есть максимальное и минимальное значение — ползунок должен ограничивать пользователя в выборе данных, а при вводе некорректного значения с клавиатуры, оно должно сбрасываться к ближайшему корректному числу (максимуму или минимуму);
  -По кнопке “Оформить заявку” должен формироваться запрос, который отправляет все данные калькулятора на бэкенд, например, чтобы потом backend мог использовать эти данные для передачи в CRM-систему;
  -В момент клика по кнопке кнопка должна блокироваться от возможности повторной отправки данных на время выполнения запроса к бэкенду, а внутри кнопки отображаться прелоадер. Инпуты и слайдеры на время отправки должны блокироваться.

### Реализовано

-
 + Адаптивная, кроссбраузерная верстка(кроме IE11); 
 + React FC компоненты, хуки;
 + Для стилей использовалcя Scss;
 + State менеджер Redux/toolkit, RTK Query;

Для сборки проекта используется Webpack 5

