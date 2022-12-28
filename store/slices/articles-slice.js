import { createSlice } from "@reduxjs/toolkit";


const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    searchedArticles: [],
    searchField: "",
    loading: false,
    articleStatus: "",
    error: null,
    empty:[]
  },
  reducers: {
    articlesRequest(state) {
      state.loading = true;
    },
    successArticles(state, action) {
      state.loading = false;
      state.articles = [...state.articles, ...action.payload];
      state.articleStatus = "success";
      state.empty=action.payload;
    },
    failedArticles(state, action) {
      state.articleStatus = "failed";
      state.loading = false;
      state.hasMore = false;
      state.error = action.payload;
      console.log("failed");
    },
    searchArticle(state, action) {
      state.searchField = action.payload;
      state.searchedArticles = state.articles.filter((article) =>
       ( article.abstract
          .toString()
          .toLowerCase()
          .match(state.searchField.toString().toLowerCase()) ||
          article.headline.main
          .toString()
          .toLowerCase()
          .match(state.searchField.toString().toLowerCase()) )
      );
    },
     Reset(state){
      state.articles = [];
      state.searchedArticles = [];
      state.searchField = "";
      state.loading = false;
      state.articleStatus = "";
      state.error = null;
    
    },
  },
});

export const articlesActions = articleSlice.actions;

export default articleSlice;
