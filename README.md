# Nomaran

**Nomaran** — веб-приложение для поиска информации о жертвах политических репрессий в Северо-Осетинской АССР. Приложение предлагает удобный интерфейс с fuzzy-поиском (на основе алгоритма Левенштейна), бесконечной прокруткой для плавной загрузки данных и фильтрами для уточнения результатов.

## Возможности

- **Fuzzy-поиск**: Поиск жертв по имени, году рождения, месту рождения, национальности или дополнительным данным с учётом опечаток (расстояние Левенштейна ≤ 2 для отдельных слов). Например, запрос "Тако" найдёт "Тасо" в "АБАЕВ Тасо Габулиевич".
- **Бесконечная прокрутка**: Автоматическая подгрузка результатов при прокрутке страницы, без традиционной пагинации.
- **Фильтры**: Фильтрация по категориям:
  - Общий список (`all`)
  - Репрессированные по национальному признаку (`repressed-nat-attribute`)
  - Расстрелянные (`list-of-shooted`)
  - Раскулаченные (`list-of-dispossessed`)
- **Сброс параметров**: Очистка поисковых параметров и возврат к начальным результатам с плавной прокруткой к разделу результатов.
- **Адаптивный дизайн**: Современный, удобный для мобильных устройств интерфейс, созданный с использованием Tailwind CSS.
- **Типизация**: Использование TypeScript для надёжной работы с данными и Prisma для типобезопасных запросов к базе данных.

## Технологический стек

- **Фреймворк**: Next.js 15 (App Router, React, TypeScript)
- **База данных**: PostgreSQL с Prisma ORM
- **Поиск**: Алгоритм Левенштейна через расширение PostgreSQL `fuzzystrmatch`
- **Кэширование**: `unstable_cache` из Next.js для оптимизации загрузки данных
- **Стили**: Tailwind CSS, PostCSS
- **Деплой**: Vercel (рекомендуется)

## Структура проекта

```
nomaran/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── fonts/
│   │   └── courier_new/
│   └── images/
│       ├── books/
│       ├── body-bg.jpg
│       ├── hero-bg.jpg
│       ├── logo-desktop.svg
│       ├── logo-mobile.svg
│       ├── logo-tablet.svg
│       ├── old-logo.svg
│       ├── president-image.png
│       ├── search-bg.jpg
│       ├── star.png
│       └── victims-ill.png
├── src/
│   ├── app/
│   │   ├── abbreviations/
│   │   ├── about/
│   │   ├── activity/
│   │   ├── itls/
│   │   ├── search/
│   │   ├── api/victims/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── victim/[id]/
│   │   └── victims/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── Arrow.tsx
│   │   │   ├── Cross.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── MenuToggle.tsx
│   │   │   ├── Search.tsx
│   │   │   └── Up.tsx
│   │   ├── Header.tsx
│   │   ├── Links.tsx
│   │   ├── Pagination.tsx
│   │   ├── ResetButton.tsx
│   │   ├── ScreenContainer.tsx
│   │   ├── SearchAnchorButton.tsx
│   │   ├── SearchForm.tsx
│   │   ├── ui/
│   │   │   ├── Anchor.tsx
│   │   │   ├── Backlink.tsx
│   │   │   ├── BurgerMenu.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   └── Input.tsx
│   │   └── victims/
│   │       ├── InfiniteVictimList.tsx
│   │       ├── VictimList.tsx
│   │       └── VictimRow.tsx
│   ├── constants/
│   │   ├── abbreviations.ts
│   │   ├── books.ts
│   │   ├── itls.ts
│   │   ├── links.ts
│   │   └── nationals.ts
│   └── utils/
│       ├── cn.ts
│       ├── getCachedVictims.ts
│       ├── getSearchParams.ts
│       ├── mapRawVictim.ts
│       └── prisma.ts
├── docker-compose.yml
├── ecosystem.config.js
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Использование

1. **Поиск**:
   - Введите запрос в поле поиска (например, "Тако 1980" или "Иванов, Москва").
   - Поддерживается fuzzy-поиск для опечаток (например, "Тако" найдёт "Тасо").
   - Разделяйте несколько терминов пробелами или запятыми.
   - Числа точно сопоставляются с полем `birthYear`.

2. **Фильтры**:
   - Выберите одну или несколько категорий: "Общий список", "Репрессированные по нац. признаку", "Список расстрелянных" или "Список раскулаченных".
   - Комбинируйте фильтры с поисковыми запросами для точных результатов.

3. **Сброс**:
   - Нажмите на кнопку с крестиком (появляется при активных параметрах поиска) для очистки запроса и фильтров.
   - Или нажмите "Сбросить фильтры" для сброса и прокрутки к разделу результатов.

4. **Бесконечная прокрутка**:
   - Прокрутите вниз для автоматической подгрузки результатов.
   - Во время загрузки отображается индикатор "Загрузка...".
   - Если результатов нет, отображается сообщение "Не найдено ничего".

## Схема базы данных

Схема базы данных определена в `prisma/schema.prisma`:

```prisma
enum Category {
  REPRESSED
  NATATTRIBUTE
  DISPOSSESSED
}

model Victim {
  id          Int      @id @default(autoincrement())
  fullname    String
  birthYear   Int?
  birthPlace  String?
  national    String?
  otherData   String?
  category    Category

  @@index([fullname])
  @@index([birthYear])
  @@index([birthPlace])
  @@index([national])
  @@index([otherData])
}
```

Для fuzzy-поиска используется расширение PostgreSQL `fuzzystrmatch`.

## Деплой

Самый простой способ развернуть Nomaran — использовать [Vercel Platform](https://vercel.com) от создателей Next.js.

1. Отправьте репозиторий на GitHub.
2. Подключите репозиторий к Vercel через панель управления.
3. Настройте переменную окружения `DATABASE_URL` в Vercel, указав подключение к вашей базе данных PostgreSQL.
4. Vercel автоматически распознает проект Next.js и развернёт его.

Подробности см. в [документации по деплою Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## Возможные улучшения

- **Производительность**: Заменить алгоритм Левенштейна на расширение PostgreSQL `pg_trgm` для более быстрого и индексируемого fuzzy-поиска с использованием триграмм.
- **Виртуализация**: Использовать `react-window` для оптимизации рендеринга больших списков.
- **Расширенные фильтры**: Добавить фильтры по диапазону дат, регионам или другим критериям.
- **Локализация**: Поддержка нескольких языков для интерфейса.
- **Аналитика**: Отслеживание поисковых запросов и взаимодействий пользователей для анализа.
- **Тестирование**: Добавить модульные и интеграционные тесты с использованием Jest или Playwright.