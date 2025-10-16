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

# 2) Клонировать репозиторий и установить зависимости
git clone <url> user-cards
cd user-cards
npm ci

# 3) Запуск дев-сервера
ng serve
# откроется http://localhost:4200/


Если Angular CLI не установлен глобально: npm i -g @angular/cli@19

Скрипты
npm start        # ng serve
npm run build    # ng build
npm test         # unit-тесты (если добавите)

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


UserListComponent — получает данные, открывает модалку, локально обновляет список.

Card-list — рендерит переданный ngTemplate.

UserEditModal — конкретная форма (name, age, email, role).

CVA-контролы — переиспользуемы .