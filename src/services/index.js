import { service } from "../config";

export const getArticles = async () => {
  const response = await fetch(
    service.ARTICLE_API_SERVICE,
  );
  return await response.json();
}
