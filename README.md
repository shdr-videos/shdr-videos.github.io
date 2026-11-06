# Школа двигательного развития — превью редизайна

Превью нового сайта [shdr.online](https://shdr.online) для согласования: <https://shdr-videos.github.io>.

Подготовлены главная, `/posts` (15 статей из 72) и `/shop`. Остальные пункты меню ведут на пустые страницы. Сайт закрыт от поисковых систем: `public/robots.txt` и `noindex` в `src/layouts/Layout.astro`. Перед запуском на основном домене оба запрета нужно снять.

## Запуск

Нужен Node.js 22.12 или новее.

```sh
npm ci
npm run dev      # разработка
npm run build    # сборка в dist/
npm run preview  # просмотр сборки
```

Каждый пуш в `main` публикуется на GitHub Pages через `.github/workflows/deploy.yml`.

## Где что менять

| Что | Файл |
| --- | --- |
| Меню, направления, руководители, тексты о школе | `src/data/site.ts` |
| Статьи (снимок ленты Tilda) | `src/data/posts.json` |
| Товары магазина | `src/pages/shop/index.astro` |
| Цвета, шрифты, отступы, кнопки | `src/styles/global.css` |
| Пустые страницы разделов | `src/pages/[section].astro` |

Токены и правила интерфейса описаны в [docs/design-system.md](docs/design-system.md).
