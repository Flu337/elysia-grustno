# elysia-test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.



# 1. Добавление преподавателя (POST)
### запрос:
    curl -X POST http://localhost:3000/api/teachers \
    -H "Content-Type: application/json" \
    -d '{"name":"hugo gg","email":"32423434@university.edu"}'

  ![Добавление преподавателя (POST)](photo_2025-06-01_22-09-40.jpg)

  ### ответ:
    {"id":6,"name":"hugo gg","email":"32423434@university.edu","subject":null}

# 2 Получение всех преподавателей (GET)
### запрос: 
    curl -X GET http://localhost:3000/api/teachers


![Получение всех преподавателей (GET)](photo_2025-06-01_22-09-43.jpg)

### ответ:

    [{"id":6,"name":"hugo gg","email":"32423434@university.edu","subject":null}]

# 3. Получение преподавателя по ID (GET)
### Запрос:
    curl -X GET http://localhost:3000/api/teachers/6

![Получение преподавателя по ID (GET)](photo_2025-06-01_22-09-45.jpg)


### ответ: 

    {"id":6,"name":"hugo gg","email":"32423434@university.edu","subject":null}


# 4. Удаление преподавателя (DELETE)
### запрос: 
    curl -X DELETE http://localhost:3000/api/teachers/6

![Удаление преподавателя (DELETE)](photo_2025-06-01_22-09-48.jpg)

### ответ:
    {"id":6,"name":"hugo gg","email":"32423434@university.edu","subject":null}

