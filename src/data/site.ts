export const LIVE_SITE = 'https://shdr.online';

/** Общий объём материалов на текущем сайте; в превью показана только часть. */
export const TOTAL_POSTS = 72;

export interface Direction {
  /** Идентификатор в адресе: /posts/?topic=<id> */
  id: string;
  label: string;
  /** Адрес пустой страницы направления в превью */
  href: string;
  /** Страница на текущем сайте, если она там есть */
  liveHref?: string;
  /** Родительская метка в ленте Tilda */
  tag: string;
  /** Подтемы; иерархия восстановлена по порядку в старом фильтре */
  children: string[];
  /** Подтемы для короткой подписи на карточке */
  highlights: string[];
}

export const directions: Direction[] = [
  {
    id: 'mladency',
    label: 'Моторика младенцев',
    href: '/motorika_mladencev/',
    liveHref: '/motorika_mladencev',
    tag: 'МЛАДЕНЦЫ',
    children: ['Переноски', 'Рефлексы', 'Контроль тазобедренных суставов', 'Спонтанная активность', 'Дотягивание', 'Хватание'],
    highlights: ['Рефлексы', 'Дотягивание', 'Хватание', 'Переноски'],
  },
  {
    id: 'osobye',
    label: 'Особые дети и взрослые',
    href: '/osobie_deti_i_vzroslie/',
    liveHref: '/osobie_deti_i_vzroslie',
    tag: 'ОСОБЫЕ ДЕТИ И ВЗРОСЛЫЕ',
    children: ['Ортезы', 'Коляски', 'Контроль головы', 'Опора на ноги', 'Стояние', 'Ходьба', 'Эквинус', 'Баланс', 'Тройное разгибание', 'Подошвенная опора', 'Ходунки', 'ТСР', 'Укладки', 'Верховая посадка', 'Вторичные нарушения', 'Сидение', 'Позный контроль', 'Зрение'],
    highlights: ['Контроль головы', 'Опора на ноги', 'Ходьба', 'ТСР'],
  },
  {
    id: 'ruka',
    label: 'Мелкая моторика и графические навыки',
    href: '/melkaya_motorika/',
    liveHref: '/melkaya_motorika',
    tag: 'РУКА',
    children: ['Графические навыки', 'Письмо', 'Рисунок', 'Писчий хват'],
    highlights: ['Письмо', 'Рисунок', 'Писчий хват'],
  },
  {
    id: 'posle-goda',
    label: 'Развитие детей после года',
    href: '/razvitie_posle_goda/',
    tag: 'ДЕТИ СТАРШЕ ГОДА',
    children: ['Тоддлеры', 'Дошкольники'],
    highlights: ['Тоддлеры', 'Дошкольники'],
  },
  {
    id: 'pozicionirovanie',
    label: 'Позиционирование',
    href: '/pozicionirovanie/',
    liveHref: '/pozicionirovanie',
    tag: 'ПОЗИЦИОНИРОВАНИЕ',
    children: ['Работа за столом'],
    highlights: ['Удобная поза', 'Работа за столом'],
  },
  {
    id: 'stopy',
    label: 'Стопы и обувь',
    href: '/stopy_obuv/',
    liveHref: '/stopy_obuv',
    tag: 'ОБУВЬ И СТОПЫ',
    children: ['Обувь', 'Стопы', 'Вальгус'],
    highlights: ['Обувь', 'Стопы', 'Вальгус'],
  },
  {
    id: 'anatomiya',
    label: 'Функциональная анатомия',
    href: '/funktsionalnaya_anatomiya/',
    tag: 'ФУНКЦИОНАЛЬНАЯ АНАТОМИЯ',
    children: ['Физкультура', 'Массаж', 'Мышцы шеи', 'Растяжка', 'Мышцы ног', 'Приседания', 'Мышцы кора'],
    highlights: ['Физкультура', 'Массаж', 'Растяжка'],
  },
  {
    id: 'neyro',
    label: 'Нейрофизиология',
    href: '/neyrofiziologiya/',
    tag: 'НЕЙРОФИЗИОЛОГИЯ',
    children: ['Кружок сумасшедших'],
    highlights: ['Кружок сумасшедших'],
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  /** Полная подпись для мобильного меню и заголовка страницы */
  fullLabel?: string;
  href?: string;
  children?: NavLink[];
}

export const nav: NavItem[] = [
  {
    label: 'О школе',
    children: [
      { label: 'О школе', href: '/' },
      { label: 'ШДР-практики', href: '/reestr/' },
    ],
  },
  {
    label: 'Направления и темы',
    children: directions.map((d) => ({ label: d.label, href: d.href })),
  },
  { label: 'Статьи', href: '/posts/' },
  { label: 'Эскизы и инструкции', href: '/eskizy_intruktsyi/' },
  { label: 'Курсы', href: '/courses/' },
  { label: 'Магазин', href: '/shop/' },
  { label: 'Ссылки', fullLabel: 'Ссылки на внешние ресурсы', href: '/links/' },
];

export const principles = [
  'Каждая моторная ситуация индивидуальна и требует тщательного анализа. Специалисту стоит владеть различными методиками, чтобы осмысленно выбрать и применить то, что необходимо в данном случае.',
  'У человека всегда есть ресурс для развития, и на него можно опереться. Даже в самых трудных ситуациях нужно концентрироваться не только на проблемах, но и на возможностях.',
  'Решение моторных задач – длительный процесс. Большой путь состоит из маленьких шагов. Поэтому мы – сторонники регулярных занятий.',
  'Любая работа может проводиться только в сотрудничестве с пациентом и его близкими. Важно помнить, что даже если человек мал, слаб, не говорит и т.д., он остается хозяином своего тела, а специалист – лишь помощником.',
];

export const goals = [
  'Повышение компетентности специалистов по движению (реабилитологов, врачей, медсестер, инструкторов, массажистов, тренеров и т.д.)',
  'Поддержка становления и развития профессионального двигательного сообщества, выработка общего языка по данной теме',
  'Формирование грамотных представлений о двигательной тематике у широкого круга публики',
];

export const siteActions: { before?: string; link: string; after?: string; href: string }[] = [
  { before: 'познакомиться с основными', link: 'тематическими направлениями', after: 'работы ШДР', href: '#directions' },
  { link: 'приобрести', after: 'книги, пособия, видеолекции от нашей команды', href: '/shop/' },
  { before: 'записаться на', link: 'обучающие курсы', href: '/courses/' },
  { before: 'найти', link: 'эскизы и инструкции', after: 'по изготовлению полезных приспособлений', href: '/eskizy_intruktsyi/' },
  { before: 'ознакомиться со', link: 'списком ШДР-практиков', href: '/reestr/' },
  { before: 'изучить', link: 'множество материалов', after: 'по двигательной тематике', href: '/posts/' },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: 'regina' | 'olga' | 'lyudmila' | 'leonid';
  resume: string;
  videoTitle: string;
  rutube: string;
  /** Пусто, если на площадке видео недоступно */
  youtube?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Регина Нахимовская',
    role: 'Руководитель проекта',
    photo: 'regina',
    resume: `${LIVE_SITE}/tpost/ka7kfryyu1-r-nahimovskaya-rezyume`,
    videoTitle: 'Как возникла идея ШДР',
    rutube: '95e3dbb6b814bdf0780a5cf5199bd607',
    // YouTube-версия (iLxehAenbg8) закрыта владельцем: «This video is private»
  },
  {
    name: 'Ольга Бояршинова',
    role: 'Руководитель направления «Особые дети и взрослые»',
    photo: 'olga',
    resume: `${LIVE_SITE}/tpost/elevkeiuc1-o-boyarshinova-rezyume`,
    videoTitle: 'Значение ШДР и ее подхода',
    rutube: 'c52f5fdd08109d3ab85701c8beef9545',
    youtube: 'tQd0lxKzwJM',
  },
  {
    name: 'Людмила Егорова',
    role: 'Руководитель направления «Мелкая моторика»',
    photo: 'lyudmila',
    resume: `${LIVE_SITE}/tpost/t53ikmckm1-l-egorova-rezyume`,
    videoTitle: 'Как я попала в ШДР',
    rutube: '65676ac3e5c1fa8f10896d93a7d2fa51',
    youtube: 'SghbtZgdsZ4',
  },
  {
    name: 'Леонид Зельдин',
    role: 'Руководитель проекта, автор подхода ШДР',
    photo: 'leonid',
    resume: `${LIVE_SITE}/tpost/xebp4v4jg1-l-zeldin-rezyume`,
    videoTitle: 'Как я дошел до жизни такой (до ШДР)',
    rutube: '001da9b5e83012b3e6eecd269a44cf8b',
    youtube: 'uIFf1Na__TY',
  },
];

export const legal = {
  privacy: `${LIVE_SITE}/personal_data`,
  offer: `${LIVE_SITE}/oferta`,
  disclaimer:
    'Ничего из опубликованных на сайте www.shdr.online материалов не является врачебной рекомендацией. Авторы публикаций не несут ответственности за действия или бездействия читателей, которые они могут совершить на основе материалов, выложенных на сайте.',
};
