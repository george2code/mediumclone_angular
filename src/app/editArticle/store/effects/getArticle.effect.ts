import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service'
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/getArticle.action'


@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions, 
    private sharedArticleService: SharedArticleService
  ) {}
}