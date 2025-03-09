import type { Link } from "../types";

export const SITE = {
  title: "The Broad Report",
  description: "A news website built with an augmented knowledge base that reports and analyzes current events",
  author: "Fatigations Corp.",
  url: "https://thebroadreport.com",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/politics",
    text: "Política",
  },
  {
    href: "/categories/sports",
    text: "Desporto",
  },
  {
    href: "/categories/business",
    text: "Negócios",
  },
  {
    href: "/categories/arts",
    text: "Arte",
  },
  {
    href: "/categories/science",
    text: "Ciência",
  },
  {
    href: "/categories/culture",
    text: "Cultura",
  },
  {
    href: "/categories/entertainment",
    text: "Entretenimento",
  },
  {
    href: "/categories/crime",
    text: "Crime",
  },
  {
    href: "/categories/other",
    text: "Outros",
  }
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "/rss.xml",
    text: "RSS",
  },
  {
    href: "/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
];
