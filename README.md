# Timetable Generator

Веб-приложение, создающееся в ходе учебной практики в 5 семестре.  
Приложение должно получать информацию от API timetable СПбГУ и формировать расписание для кабинетов/преподавателей/групп в формате списка или таблиц, которые в дальнешем можно будет распечатать

## Документация

### API Timetable

Адрес API: <https://timetable.spbu.ru/api/v1>

### Запросы

* **/addresses**  
Получить все адреса  
В ответе будут содержаться идентификаторы адресов (зданий) университета

* **/addresses/' + oid + '/classrooms'**  
Получить все кабинеты по адресу
В ответе будут содержаться идентификаторы кабинетов  
**oid** - идентификатор адреса/здания

* **/classrooms/' + roomid +'/events/' + fromstr + '/' + tostr**  
Получить занятия в кабинете за период  
**roomid** - идентификатор кабинета  
**fromstr** - дата начала событий, например, 202009280800 – 28 сентября 2020 года 8:00  
**tostr** - дата окончания событий, например, 202010042000 – 4 октября 2020 года 20:00

* **/educators/search/' + encodeURI(query)**  
В ответе будут содержаться идентификаторы преподавателей  
**query** - начало ФИО, например, если query=’Петро’, то будут искаться все преподаватели, у которых фамилия начинается с ’Петро’  

* **/educators/'+staffid+'/events**  
Получить расписание преподавателя за период  
**staffid** – идентификатор преподавателя

* **/study/divisions/programs/levels**  
Получить все факультеты  
В ответе будут содержаться идентификаторы факультетоы  

* **/study/divisions**  
Получить все факультеты

* **/progams/'+progrid+'/groups**  
В ответе будут содержаться идентификаторы группы образовательной программы  
**progrid** – идентификатор программы  

* **/groups/'+gid+'/events/'+fromstr+'/'+tostr+'?timetable=Primary**  
Получить расписание группы  
**gid** – идентификатор группы  
**fromstr** – дата начала событий, например, 202009280800 – 28 сентября 2020 года 8:00  
**tostr**  – дата окончания событий, например, 202010042000 – 4 октября 2020 года 20:00

## Материалы
* master-ветка на [heroku](https://timetable--generator.herokuapp.com)
* макет в [figma](https://www.figma.com/file/UgR6tjDqQkIDdLAMwZjquv/Timetable-Generator?node-id=0%3A1)
* писать можно на почту inctnce@icloud.com
