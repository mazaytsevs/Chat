# 4atik 👻
Скачайте и наслаждайтесь чатиком, в котором есть все нужное: диалоги с незнакомцами и неограниченная власть, если вы админ.

___

## Основные технологии, используемые в проекте:
<img align="left" alt="HTML" width="60px" src="https://img.icons8.com/color/344/html-5--v1.png" />
<img align="left" alt="CSS" width="60px" src="https://img.icons8.com/color/344/css3.png" />
<img align="left" alt="JavaScript" width="60px" src="https://img.icons8.com/color/344/javascript--v2.png" />
<img align="left" alt="React" width="60px" src="https://icons8.ru/icon/NfbyHexzVEDk/реакция" />
<img align="left" alt="NodeJS" width="60px" src="https://img.icons8.com/fluency/344/node-js.png" />
<img align="left" alt="Express" width="60px" src="https://icons8.ru/icon/WNoJgbzDr3i2/express-js" />
<br/>
 А также: REST API, web-sockets, Sequelize
 Шаблоны дизайнов взяты с сайта: https://react-bootstrap.github.io/
<br/>
<br/>

___

## Инструкция по локальному запуску:
- В папке "server" находим файл .envExample, переименовываем файл на .env и вставляем в DB_USER
DB_PASS креды для вашей базы данных PostgresQL.
- Открываем три терминала: client (cd client), server (cd server), socket (cd server).
- Далее необходимо установить пакеты для фронта и бэка командой npm i в каждом из терминалов.
- В терминале server: sequelize-cli db:migrate , а затем: sequelize-cli db:seed
- Запуск каждого из сервисов выполняется следующими командами:
server: npm run dev
sockets: npm run dev-sockets
client: npm start

___


## Путь пользователя:
- Чтобы пользоваться функционалом сайта, пользователю необходимо зарегестрироваться в системе или авторизоваться. 