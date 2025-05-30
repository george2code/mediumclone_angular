import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import { Router } from '@angular/router'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { EditArticleService } from '../../services/editArticle.service'
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from '../actions/updateArticle.action'


@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({articleInput, slug}) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterUpdate$ = createEffect(
    () => this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => {
        this.router.navigate(['/articles', article.slug])
        })
    ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions, 
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}