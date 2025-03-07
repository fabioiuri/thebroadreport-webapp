import { type CollectionEntry } from "astro:content";
import { SITE } from "../config";
import defaultImage from "~/assets/images/default-image.jpg";
import type { ArticleMeta, Meta } from "../types";
import { capitalizeFirstLetter } from "./letter";

type getMeta = CollectionEntry<"articles" | "views">;

export const getMeta = async (
  collection: getMeta,
  category?: string
): Promise<Meta | ArticleMeta> => {
  try {
    if (collection.collection === "articles") {
      return {
        title: `${capitalizeFirstLetter(collection.data.title)} - ${
          SITE.title
        }`,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: collection.data.cover,
        ogImageAlt: collection.data.title,
        publishedTime: collection.data.createdAt,
        lastModified: collection.data.updatedAt,
        type: "article",
      };
    }

    if (collection.collection === "views") {
      const title =
        collection.id === "categories" && category
          ? `${capitalizeFirstLetter(category)}  - ${SITE.title}`
          : collection.id === "home"
          ? SITE.title
          : `${capitalizeFirstLetter(collection.data.title)} - ${SITE.title}`;

      return {
        title: title,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: defaultImage.src,
        ogImageAlt: SITE.title,
        type: "website",
      };
    }

    throw new Error("Invalid collection");
  } catch (error) {
    console.error("Error generating metadata:", error);
    throw error;
  }
};
