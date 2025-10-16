UserCards

Приложение на Angular 19 .
Показывает список пользователей, позволяет редактировать данные в модальном окне. Карточки рендерятся через переопределяемый шаблон, для полей формы используются кастомные-CVA контролы.

Стек:
-Angular 19, Standalone Components, Change Detection: OnPush
-RxJS + Signals
-Angular Material

Быстрый старт
# 1) Node (если не установлен)
winget install OpenJS.NodeJS.LTS -s winget
# перезапустить терминал и проверить:
node -v
npm -v

# 3) Установить зависимости
npm install
Если Angular CLI не установлен глобально: npm i -g @angular/cli@19

# 3) Запуск дев-сервера
ng serve
# http://localhost:4200/


Архитектура
src/
 ├─ core/           # api, основные модели
 ├─ shared/         # переиспользуемые компоненты
 │   └─ search/
 │       ├─ input-field/   # кастомный контрол
 │       └─ select-field/  # кастомный контрол
 └─ features/
     └─ user-list/
         ├─ user-list.component.        # smart, бизнес-логика
         └─ modals/
             └─ user-edit-modal.        # модалка с конкретной реализацией формы


UserListComponent - получает данные, открывает модалку, локально обновляет список.

CardComponent - рендерит переданный ngTemplate.

UserEditModal - конкретная реализация формы (name, age, email, role).

CVA - переиспользуемые контролы.
