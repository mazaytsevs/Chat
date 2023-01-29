# 4atik 👻
Скачайте и наслаждайтесь чатиком, в котором есть все нужное: диалоги с незнакомцами и неограниченная власть, если вы админ.

___

## Основные технологии, используемые в проекте:
<img align="left" alt="HTML" width="60px" src="https://img.icons8.com/color/344/html-5--v1.png" />
<img align="left" alt="CSS" width="60px" src="https://img.icons8.com/color/344/css3.png" />
<img align="left" alt="JavaScript" width="60px" src="https://img.icons8.com/color/344/javascript--v2.png" />
<img align="left" alt="React" width="60px" src="https://img.icons8.com/plasticine/100/null/react.png" />
<img align="left" alt="NodeJS" width="60px" src="https://img.icons8.com/fluency/344/node-js.png" />
<img align="left" alt="Express" width="60px" src="https://img.icons8.com/office/16/null/express-js.png" />

<br/>
<br/>
<br/>


 А также: REST API, web-sockets, Sequelize
 Шаблоны дизайнов взяты с сайта: https://react-bootstrap.github.io/
<br/>
<br/>

___

## Инструкция по локальному запуску:
- В папке "server" находим файл .envExample, переименовываем файл на .env и вставляем в ```DB_USER``` и ```DB_PASS``` креды для вашей базы данных PostgresQL.
- В папке "client" находим файл .envExample, переименовываем файл на .env
- Открываем три терминала: client (```cd client```), server (```cd server```), socket (```cd server```).
- Далее необходимо установить пакеты для фронта и бэка командой ```npm i``` в каждом из терминалов.
- В терминале server: ```npx sequelize-cli db:migrate``` , а затем: ```npx sequelize-cli db:seed:all```
- Запуск каждого из сервисов выполняется следующими командами:
server: ```npm run dev```
sockets: ```npm run dev-sockets```
client: ```npm start```

___


## Путь пользователя:
- Чтобы пользоваться функционалом сайта, пользователю необходимо зарегестрироваться в системе или авторизоваться. 

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/99086528/215333595-dcb6069a-eb0c-4b0d-af3b-d5d2e95930a5.png">

- Или залогиниться уже под существующим пользователем:
Администратор (может назначать модераторов, блокировать посетителям чат по времени): login: admin, password: 123
Модератор (может блокировать посетителям чат по времени): login: moderator1, password: 123

- У обычных пользователей есть доступ только к диалогам, которые реализованы на вебсокетах:
<img width="1512" alt="image" src="https://user-images.githubusercontent.com/99086528/215333985-ee01ba43-d845-42f5-9a7a-a53970f6be23.png">

- Админ и модератор имеют также вкладку Settings  с Admin panel:

<img width="1511" alt="image" src="https://user-images.githubusercontent.com/99086528/215334265-b0a4144f-72b4-4c00-a843-fd0b41b4854b.png">

