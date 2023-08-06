import { handleAPIPost } from "../RESTFunctions";
import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

import type { Article } from "../../news/ArticleDef";

export async function createArticle(articleData: Article) {
  const createResponse = await handleAPIPost(
    articleData,
    PUBLIC_API_GATEWAY_URL + "/news"
  );
  return createResponse;
}
