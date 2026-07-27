import type { Lang } from "./i18n";

export interface Project {
  logo: string | null; // asset base name (dark/light pair); null => text title
  title?: string; // used when there is no logo image
  body: string;
  more?: string; // extra text revealed when the card is expanded
}

export interface Faq {
  q: string;
  a?: string;
  open?: boolean;
}

export interface Content {
  hero: { line1: string; line2a: string; line2b: string; subtitle: string };
  projects: Project[];
  faqs: Faq[];
  ui: {
    contact: string;
    contactShort: string;
    toggleTheme: string;
    toggleLang: string;
    expand: string;
    collapse: string;
  };
}

// Card titles are product names — shared across languages.
const titles = {
  media: "Media Project / Event Agency",
  traders: "Traders platform",
  psp: "Payment service provider",
  affiliate: "Affiliate marketing",
};

export const content: Record<Lang, Content> = {
  ru: {
    hero: {
      line1: "Когда отдельные нити сплетаются",
      line2a: "рождается паутина",
      line2b: "возможностей",
      subtitle:
        "Sard это не просто группа компаний, это команда, собранная из единомышленников, которые хотят поменять индустрию в лучшую сторону вместе со своими партнерами",
    },
    projects: [
      {
        logo: null,
        title: titles.media,
        body: [
          "Крупнейшее media и event-направление в сфере High-risk, Fintech, Crypto, P2P, Gambling и Affiliate.",
          "Мы объединяем актуальные новости рынка, рабочие мануалы, прямые эфиры, подкасты с лидерами индустрии и сильными участниками рынка, а также комьюнити активных команд, которые формируют индустрию.",
          "В рамках event-направления мы организуем закрытые мероприятия для представителей Fintech, P2P, Crypto, High-risk, Gambling и Affiliate-комьюнити.",
          "Наши ивенты собирают фаундеров, агрегаторов, C-level, топовые команды, представителей бирж, мерчантов и лидеров рынка в приватной атмосфере, где нет случайных людей, а каждое знакомство может превратиться в партнёрство, сделку или новое направление для роста.",
          "Один из последних проектов — Fintech Party: закрытая финтех-вечеринка с ручной модерацией гостей, охраной на локации, запретом на фото и видео, сильным нетворкингом, DJ-сетом, коктейлями, вкусной кухней, кальянным лаунжем и game-зоной.",
          "Мы объединяем медиа, комьюнити, подкасты и offline-ивенты, чтобы создавать среду, где рождаются реальные договорённости, усиливаются партнёрства и двигается рынок.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.traders,
        body: [
          "Traders Platform — это платёжное решение, созданное совместно с сильными техническими специалистами в сфере PSP.",
          "Мы обеспечиваем приём и выплаты платежей для Gambling, Betting и Exchange-направлений, предлагая партнёрам выгодные условия и надёжную платёжную инфраструктуру.",
          "Для команд трейдеров мы предоставляем трафик от проверенных мерчантов, сопровождение support-отдела, поддержку тимлидеров, прозрачную финансовую модель, защиту данных, безопасность, юридическое сопровождение и полный набор инструментов для стабильной работы.",
          "Мы создаём условия, в которых команда может сосредоточиться на результате, масштабировать объёмы и работать максимально эффективно.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.psp,
        body: [
          "Надёжный платёжный партнёр для бизнеса, который помогает компаниям эффективно принимать, маршрутизировать и обрабатывать платежи.",
          "Предоставляем качественные и прозрачные платёжные каскады, работаем с проверенными участниками рынка и подбираем индивидуальные условия для шлюзов, мерчантов и партнёров.",
          "С нами вы получаете доступ к широкому набору инструментов для обработки платежей, гибкую инфраструктуру и решения, адаптированные под задачи вашего бизнеса.",
          "Если вы хотите развивать собственный платёжный сервис, мы можем реализовать White Label-решение или полноценную платформу под ваш индивидуальный запрос.",
          "Мы помогаем бизнесу масштабировать платёжные объёмы, повышать стабильность обработки и выстраивать надёжную платёжную инфраструктуру.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.affiliate,
        body: [
          "Сильная байинговая команда, поставляющая на рынок самые горячие лиды в таких вертикалях, как iGaming, Adult и Nutra.",
          "Работаем так, чтобы каждый партнёр был доволен.",
          "В будущем планируем запуск собственной партнёрской структуры.",
        ].join("\n\n"),
      },
    ],
    faqs: [
      {
        q: "Кто Мы?",
        a: "SARD (Smart Adaptable Resources for Development) Group занимается развитием проектов в сферах Gambling, Betting, IT, Crypto и Fintech.",
      },
      {
        q: "Наши ресурсы и достижения",
        a: [
          "В нашем арсенале — множество продуктов, которые мы вывели на высокий уровень. Каждый из них занимает лидирующие позиции в своей нише.",
          "Но мы не останавливаемся на достигнутом: ежедневно создаём новое, чтобы построить самую устойчивую и сильную инфраструктуру в области iGaming и IT.",
          "Сегодня мы уже располагаем собственными медиа-ресурсами, платёжным решением, техническим отделом, командой по привлечению клиентского трафика, а также сильными партнёрами и контрагентами.",
          "Каждая из этих составляющих по отдельности имеет прочную позицию на рынке, безупречную репутацию и высокие финансовые результаты. Вместе же они формируют нечто большее — единую экосистему SARD Group.",
        ].join("\n\n"),
      },
      {
        q: "Какие потребности мы закрываем?",
        a: "Благодаря комплексному подходу и развитой структуре, мы способны удовлетворить любую потребность: запустить проект под ключ или развить существующий, провести аудит и оптимизацию, обеспечить или обработать платёжный трафик, привлечь клиентский трафик, разработать техническое решение, провести масштабную медиа-кампанию, и многое другое.",
      },
      {
        q: "Что вы сможете получить, работая с нами?",
        a: [
          "Становясь частью SARD Group, вы попадаете в сильное комьюнити профессионалов и единомышленников, обладающих всеми необходимыми ресурсами для реализации любого запроса.",
          "Взаимодействуя с лидерами — вы неизбежно растёте и развиваетесь.",
          "Если вы хотите побеждать — крепкие нити паутины SARD уже ждут вас.",
        ].join("\n\n"),
      },
    ],
    ui: {
      contact: "Связаться",
      contactShort: "Связаться",
      toggleTheme: "Сменить тему",
      toggleLang: "Switch to English",
      expand: "Развернуть",
      collapse: "Свернуть",
    },
  },

  en: {
    hero: {
      line1: "When separate threads weave together,",
      line2a: "a web",
      line2b: "of opportunities is born",
      subtitle:
        "Sard is more than a group of companies — it's a team of like-minded people who want to change the industry for the better, together with their partners.",
    },
    projects: [
      {
        logo: null,
        title: titles.media,
        body: [
          "The largest media and event direction in High-risk, Fintech, Crypto, P2P, Gambling and Affiliate.",
          "We bring together the latest market news, working manuals, live streams and podcasts with industry leaders and strong market players, as well as a community of active teams that shape the industry.",
          "As part of our event direction, we organize closed events for representatives of Fintech, P2P, Crypto, High-risk, Gambling and the Affiliate community.",
          "Our events gather founders, aggregators, C-level executives, top teams, exchange representatives, merchants and market leaders in a private atmosphere where there are no random people, and every acquaintance can turn into a partnership, a deal or a new direction for growth.",
          "One of our latest projects is Fintech Party: a closed fintech party with hand-picked guest moderation, on-site security, a ban on photo and video, strong networking, a DJ set, cocktails, great food, a hookah lounge and a game zone.",
          "We combine media, community, podcasts and offline events to create an environment where real agreements are born, partnerships grow stronger and the market moves forward.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.traders,
        body: [
          "Traders Platform is a payment solution created together with strong technical specialists in the PSP field.",
          "We handle deposits and payouts for Gambling, Betting and Exchange directions, offering partners favorable terms and reliable payment infrastructure.",
          "For trading teams we provide traffic from verified merchants, support-department assistance, team-lead support, a transparent financial model, data protection, security, legal support and a full set of tools for stable operation.",
          "We create conditions in which a team can focus on results, scale volumes and work as efficiently as possible.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.psp,
        body: [
          "A reliable payment partner for business that helps companies accept, route and process payments efficiently.",
          "We provide high-quality, transparent payment cascades, work with verified market participants and tailor individual terms for gateways, merchants and partners.",
          "With us you get access to a wide set of payment-processing tools, flexible infrastructure and solutions adapted to your business needs.",
          "If you want to develop your own payment service, we can implement a White Label solution or a full-fledged platform to your individual request.",
          "We help businesses scale payment volumes, increase processing stability and build reliable payment infrastructure.",
        ].join("\n\n"),
      },
      {
        logo: null,
        title: titles.affiliate,
        body: [
          "A strong buying team delivering the hottest leads to the market in verticals such as iGaming, Adult and Nutra.",
          "We work so that every partner is satisfied.",
          "In the future we plan to launch our own affiliate structure.",
        ].join("\n\n"),
      },
    ],
    faqs: [
      {
        q: "Who are we?",
        a: "SARD (Smart Adaptable Resources for Development) Group develops projects in Gambling, Betting, IT, Crypto and Fintech.",
      },
      {
        q: "Our resources and achievements",
        a: [
          "Our arsenal holds many products that we've taken to a high level. Each of them holds a leading position in its niche.",
          "But we don't stop at what we've achieved: every day we create something new to build the most resilient and powerful infrastructure in iGaming and IT.",
          "Today we already have our own media resources, a payment solution, a technical department, a client-traffic acquisition team, as well as strong partners and counterparties.",
          "Each of these components on its own holds a solid market position, a flawless reputation and high financial results. Together, they form something greater — the unified SARD Group ecosystem.",
        ].join("\n\n"),
      },
      {
        q: "What needs do we cover?",
        a: "Thanks to a comprehensive approach and a developed structure, we can meet any need: launch a project turnkey or grow an existing one, run an audit and optimization, provide or process payment traffic, drive client traffic, develop a technical solution, run a large-scale media campaign, and much more.",
      },
      {
        q: "What will you get working with us?",
        a: [
          "By becoming part of SARD Group, you join a strong community of professionals and like-minded people who have all the resources needed to bring any request to life.",
          "By working with leaders, you inevitably grow and develop.",
          "If you want to win — the strong threads of the SARD web are already waiting for you.",
        ].join("\n\n"),
      },
    ],
    ui: {
      contact: "Get in touch",
      contactShort: "Contact",
      toggleTheme: "Switch theme",
      toggleLang: "Переключить на русский",
      expand: "Expand",
      collapse: "Collapse",
    },
  },
};

// Not translated.
export const contactEmail = "sard@gmail.com";
export const contactHandle = "@sard";
