import type { Link } from "../types";

export const SITE = {
  title: "O Arquivo",
  description: "Um portal de notícias desenvolvido com uma base de conhecimento ampliada, dedicado à cobertura e análise de eventos atuais.",
  author: "Fatigations Corp.",
  url: "https://oarquivo.pt",
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
    text: "Contactos",
  },
  {
    href: "/privacy",
    text: "Privacidade",
  },
  {
    href: "/terms",
    text: "Termos e Condições",
  },
  {
    href: "/cookie-policy",
    text: "Cookies",
  },
  {
    href: "/rss.xml",
    text: "RSS",
  },
  {
    href: "/sitemap-index.xml",
    text: "Mapa do Site",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://x.com/thebroadrep",
    text: "Twitter",
    icon: "newTwitter",
  },
];
