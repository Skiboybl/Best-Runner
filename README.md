## Hello! This is the BestRunner App.
This App allows you to track your workouts activity, and also to view the weekly chart based on your activity.


ENGLISH BELOW &#8595;

## Что можно делать в приложении:

**1. Добавьте новую тренировку или отредактируйте существующую:**

* по расстоянию в км;
* по дате;
* по типу (прогулка / бег / велосипед / лыжи)
* добавить комментарий;

**3. Удалите существующую тренировку;**

**4. Фильтр тренировок:**

* по дате: старая-новая, новая-старая;
* по типу: велосипед / прогулка / бег / лыжи;
* по км: макс-мин, мин-макс

## Структура приложения.

* React.js для создания интерфейса;
* Redux для управления состоянием приложения;
* React-router для маршрутизации;
* Reselect для реализации фильтра, и запоминания дорогостоящих вычислений;
* Material UI для форм и полей ввода и UI компонентов;
*Не использовала Formik/React-hook-form, потому что не было смысла в валидация форм.
* Canvas.js для построения недельного графика с данными;

___ 
### Overview and Goals:

**1. Add a new workout / Edit the existing one:**

* by distance in km;
* by date;
* by type (walk/run/bike/ski)
* nclude a comment;

**3. Delete the existing workout;**

**4. Filter Workouts:**

* by date: oldest-newest, newest-oldest;
* by type: bike/walk/run/ski;
* by km: max-min, min-max

### App construction.
* React.js to build the front-end;
* Redux for state managemet;
* React-router for routing;
* Redux-reselect to implement complex filter to memoize expensive calculations;
* Material UI for Forms and Input Fields;
* Canvas.js to make the weekly chart with the data;

### What Would I Like to Improve?
1. UX/UI design;

