import { getCollection } from "astro:content";

const articlesCollection = (
  await getCollection("articles", ({ data }) => {
    return new Date(data.postedAt);
  })
).sort((a, b) => b.data.postedAt.localeCompare(a.data.postedAt));

export const articlesHandler = {
  allArticles: () => articlesCollection,

  mainHeadline: () => {
    const article = articlesCollection.filter(a => a.data.category.id == "politics")[0];
    if (!article)
      throw new Error(
        "Please ensure there is at least one item to display for the main headline."
      );
    return article;
  },

  subHeadlines: () => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesCollection
      .filter(
        (article) =>
          mainHeadline.id !== article.id
      )
      .filter(a => ['science', 'business', 'politics'].indexOf(a.data.category.id) >= 0)
      .slice(0, 4);

    if (subHeadlines.length === 0)
      throw new Error(
        "Please ensure there is at least one item to display for the sub headlines."
      );
    return subHeadlines;
  },

  latest: () => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesHandler.subHeadlines();
    const allHeadlinesIds = [mainHeadline, ...subHeadlines].map(a => a.id);

    return articlesCollection.filter(a => allHeadlinesIds.indexOf(a.id) === -1).slice(0, 9);
  },

  categoryLatest: (categoryId: string) => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesHandler.subHeadlines();
    const allHeadlinesIds = [mainHeadline, ...subHeadlines].map(a => a.id);

    return articlesCollection
      .filter(a => allHeadlinesIds.indexOf(a.id) === -1)
      .filter(a => a.data.category.id == categoryId)
      .slice(0, 3);
  }
};
