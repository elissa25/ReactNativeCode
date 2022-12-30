import { articlesActions } from "../slices/articles-slice";
import config from '../../config';

export const getAllArticles = (page) => {
  return async (dispatch, getState) => {
    const accessToken = getState().login.token;
    try {
      dispatch(articlesActions.articlesRequest());
      const response = await fetch(
        `${config.ARTICLE_URL}?page=`+page,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Failed to fetch !');
      }
      const data = await response.json();
      const articles = data.response.docs;
     
      dispatch(articlesActions.successArticles(articles));
    } catch (error) {
      dispatch(articlesActions.failedArticles(error.message));
    }
  };
};