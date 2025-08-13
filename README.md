# Limar — Vite + React App

Проект подготовлен для деплоя на Vercel.

## Локальная разработка
```bash
npm ci
npm run dev
# open http://localhost:5173
```

## Сборка и предпросмотр
```bash
npm run build
npm run preview
```

## Деплой на Vercel
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist/public`

## Примечание по env
- Для переменных окружения фронтенда используйте префикс `VITE_`.
- Не коммитьте `.env` файлы в репозиторий.
