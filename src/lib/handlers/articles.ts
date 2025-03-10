import { getCollection } from "astro:content";

const articlesCollection = (
  await getCollection("articles", ({ data }) => {
    return new Date(data.postedAt);
  })
).sort((a, b) => b.data.postedAt.localeCompare(a.data.postedAt));

export const articlesHandler = {
  allArticles: () => articlesCollection,

  mainHeadline: () => {
    const article = articlesCollection[0];
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
      .slice(0, 4);

    if (subHeadlines.length === 0)
      throw new Error(
        "Please ensure there is at least one item to display for the sub headlines."
      );
    return subHeadlines;
  },
};
