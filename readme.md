# Изучение REST API в Node.js

Функционал сетевых запросов из среды Node.js

## Задание 28.3.1

Сервис [JSONPlaceholder](https://jsonplaceholder.typicode.com/) предоставляет URL для получения списка моковых постов (раздел /posts).

Требуется:

1. загрузить список постов;
2. вывести в консоль количество постов, принадлежащих юзеру с userId «1».

### Запуск решения

```bash
node get_request/getposts.js
```

## Query params

Примитивная фильтрация комментариев относительно их постов с помощью ***query params***

Сервиса [JSONPlaceholder](https://jsonplaceholder.typicode.com/) предоставляет URL для получения списка моковых комментариев (раздел /comments).

### Запуск решения

```bash
node query_params/getcomments.js
```