import rawPosts from '../data/posts.json';
import { directions } from '../data/site';

export interface Post {
  id: string;
  title: string;
  descr: string;
  date: string;
  url: string;
  tags: string[];
}

export const posts = rawPosts as Post[];

const parentByTag = new Map(directions.map((d) => [d.tag, d]));

/** Метки ленты приводятся к тем названиям, что и в меню: «МЛАДЕНЦЫ» → «Моторика младенцев». */
export function tagLabel(tag: string): string {
  return parentByTag.get(tag)?.label ?? tag;
}

/** Идентификатор фильтра: у направления — его id, у подтемы — её название. */
export function tagId(tag: string): string {
  return parentByTag.get(tag)?.id ?? tag;
}

/** Все фильтры, под которые попадает статья: подтема учитывается и в родительском направлении. */
export function postFilterIds(post: Post): string[] {
  const ids = new Set<string>();
  for (const tag of post.tags) {
    ids.add(tagId(tag));
    for (const d of directions) {
      if (d.children.includes(tag)) ids.add(d.id);
    }
  }
  return [...ids];
}

/** Только те направления и подтемы, в которых есть статьи: пустых фильтров быть не должно. */
export function filterTree() {
  const count = (id: string) => posts.filter((p) => postFilterIds(p).includes(id)).length;
  return directions
    .map((d) => ({
      id: d.id,
      label: d.label,
      count: count(d.id),
      children: d.children
        .map((label) => ({ id: label, label, count: count(label) }))
        .filter((c) => c.count > 0),
    }))
    .filter((d) => d.count > 0);
}

const dateFormat = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(iso: string): string {
  return dateFormat.format(new Date(`${iso}T00:00:00Z`)).replace(' г.', '');
}
