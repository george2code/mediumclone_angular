import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../shared/types/appState.interface";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";
import { CreateArticleComponent } from "../components/create-article/create-article.component";

export const createArticleFeatureSelector = createFeatureSelector<
    AppStateInterface,
    CreateArticleStateInterface
>('createArticle')

export const isSubmittingSelector = createSelector(
    createArticleFeatureSelector, 
    (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
)