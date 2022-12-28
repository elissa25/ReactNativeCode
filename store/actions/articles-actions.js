import { articlesActions } from "../slices/articles-slice";

export const getAllArticles = (page) => {
  return async (dispatch, getState) => {
    const accessToken = getState().login.token;
    try {
      dispatch(articlesActions.articlesRequest());
      const response = await fetch(
        'http://34.245.213.76:3000/articles?page='+page ,
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
      console.log(page);
      const articles = data.response.docs;
     
      dispatch(articlesActions.successArticles(articles));
    } catch (error) {
      dispatch(articlesActions.failedArticles(error.message));
    }
  };
};