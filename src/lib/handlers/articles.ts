import { getCollection } from "astro:content";

const articlesCollection = (
  await getCollection("articles", ({ data }) => {
    return new Date(data.postedAt);
  })
).sort((a, b) => {
  if (a.data.rank == b.data.rank)
    return b.data.postedAt.localeCompare(a.data.postedAt)
  else
    return b.data.rank - a.data.rank;
});

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
      .filter(a => ['science', 'economics', 'business', 'politics'].indexOf(a.data.category.id) >= 0)
      .slice(0, 4);

    if (subHeadlines.length === 0)
      throw new Error(
        "Please ensure there is at least one item to display for the sub headlines."
      );
    return subHeadlines;
  },

  otherLatest: (excludeLatestFromCategoryIds: string[], limit: number) => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesHandler.subHeadlines();
    const allExcludedIds = [mainHeadline, ...subHeadlines].map(a => a.id);

    for (const categoryId of excludeLatestFromCategoryIds) {
      allExcludedIds.push(...articlesHandler.categoryLatest(categoryId).map(a => a.id));
    };

    return articlesCollection.filter(a => allExcludedIds.indexOf(a.id) === -1).slice(0, limit);
  },

  categoryLatest: (categoryId: string) => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesHandler.subHeadlines();
    const allHeadlinesIds = [mainHeadline, ...subHeadlines].map(a => a.id);

    return articlesCollection
      .filter(a => allHeadlinesIds.indexOf(a.id) === -1)
      .filter(a => a.data.category.id == categoryId)
      .slice(0, 4);
  }
};
