# Timetable Generator

Проект, разрабатываемый в рамках учебной практики в 5 семестре.  
Приложение должно получать информацию от API timetable СПбГУ и формировать расписание для кабинетов/преподавателей/групп в формате списка или таблиц, которые в дальнейшем можно будет распечатать

## Документация

### Обзор

<p align=center>Главный экран представляет собой три раздела: "кабинеты", "преподаватели" и "группы"</p>  
  
<img src="./documents/README%20assets/main%20screen.png" alt="drawing" align=center width="1000"/>  
  
<p align=center>Работа приложения на примере раздела "группы" </p>  
   
<img src="./documents/README%20assets/demo.gif" alt="drawing" align=center width="1000"/>

- Пример выходного документа доступен по [ссылке](https://github.com/inctnce/timetable-generator/blob/master/documents/README%20assets/demo%20document.pdf)
- Более подробно вы можете ознакомиться с проектом по этой [ссылке](https://timetable--generator.herokuapp.com)

### Команда 

Над проектом работали 4 человека

- [Белов Артем](https://github.com/inctnce) - разработка, организация команды
- [Амельченкова Ксения](https://github.com/runnia) - UI/UX дизайн
- [Петрович Юрий](https://github.com/Kordebalet232) - разработка
- [Величко Кирилл](https://github.com/veliKerril) - работа с документами

### Материалы
* master-ветка на [heroku](https://timetable--generator.herokuapp.com)
* макет в [figma](https://www.figma.com/file/UgR6tjDqQkIDdLAMwZjquv/Timetable-Generator?node-id=0%3A1)
* писать можно на почту timetable.generator.spbu@gmail.com


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


