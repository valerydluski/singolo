# singolo task

Links for finished parts:
Full index.html: [Singolo Full](https://valerydluski.github.io/singolo/)

Это ветка для таска Singolo. DOM. Задание для кросс чека в другой ветке

Цели задания 
1) Header
Сделать меню с переключением. Активным остается выбранный элемент меню, предыдущий становится неактивным. Страница должна при этом переходить по якорям в заданную позицию.
2)Slider. Переключение слайдов
Есть 2 слайда. Нужно добавить вторую картинку Slide-2. Сделать взаимодействие с кнопками, при нажатии на которые, карусель должна менять изображение на новое. Карусель должна быть бесконечной, т.е. можно все время нажимать "вправо", и картинки будут постоянно меняться. Этот элемент не обязательно делать наложением слоев, достаточно сделать его просто картинкой целиком. Стрелки при этом остаются того же цвета.

3)Slider. Активация экранов телефонов
На картинке Slide-1 есть 2 телефона, вертикальный и горизонтальный. При нажатии на телефон, экран должен погаснуть. Это значит, что вместо картинки должен появиться черный фон ровно по размеру экрана.

❗ При перелистывании карусели, не имеет значения, сохраняется состояние экрана телефона, или возвращается в исходное.

4)Portfolio. Переключение табов
При пеерключении табов в верхней части блока, новый таб должен становиться активным. Страница может не переключаться, оставаясь на своем месте. Картинки снизу, должны менять свои позиции, сдвигаясь на одинаковую величину. Либо они должны перемещаться в случайном порядке. Главное, чтобы те же картинки не оставались на своем месте.

5)Portfolio. Взаимодействие с картинками
При нажатии на картинку вокруг нее должна появиться рамка цвета #F06C64 величиной 5px. При нажатии на другую картинку, предыдущая должна потерять рамку, а новая ее получить.

6)Get a quote
При заполнении формы, пользователь должен ввести обязательные данные. Отправка формы не должна выполнять заданного по умолчанию действия submit. Т.е. нужно лишить форму возможности отправлять данные. Вместо этого должно появиться окно поверх макета, со следующей информацией:

    Письмо отправлено

        Если поле Subject заполнено строкой "Singolo", то должна появиться строка:

            Тема: Singolo

        Если поле Subject не заполнено, то должна появиться строка:

            Без темы

        Если поле Describe... заполнено строкой "Portfolio project", то должна появиться строка:

            Описание: Portfolio project

        Если поле Describe... не заполнено, то должна появиться строка:

            Без описания

        Снизу должна быть кнопка OK, при нажатии на которую окно с информацией прячется.

                Примеры сообщений:

                        Письмо отправлено  
                        Тема: Singolo  
                        Описание: Portfolio project  
                        OK
                        Или

                        Письмо отправлено  
                        Без темы  
                        Без описания  
                        OK