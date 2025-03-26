import type { Link } from "../types";

export const SITE = {
  title: "O Abrangente",
  description: "Um portal de notícias desenvolvido com uma base de conhecimento ampliada, dedicado à cobertura e análise de eventos atuais.",
  author: "Fatigations Corp.",
  url: "https://oabrangente.pt",
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
    href: "/categories/economics",
    text: "Economia",
  },
  {
    href: "/categories/business",
    text: "Negócios",
  },
  {
    href: "/categories/science",
    text: "Ciência",
  },
  {
    href: "/categories/sports",
    text: "Desporto",
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
    href: "https://x.com/thebroadrep",
    text: "Twitter",
    icon: "newTwitter",
  },
];
