import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {of} from 'rxjs'
import { AddToFavoritesService } from '../../services/adToFavorites.service'
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from '../actions/addToFavorites.action'
import { ArticleInterface } from '../../../../types/article.interface'

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({isFavorited, slug}) => {
       const article$ = isFavorited ? 
        this.addToFavoritesService.removeFromFavorites(slug) : 
        this.addToFavoritesService.addToFavorites(slug)

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({article})
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions, 
    private addToFavoritesService: AddToFavoritesService,
  ) {}
}