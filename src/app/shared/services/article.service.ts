import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface'
import { ArticleInterface } from '../types/article.interface'
import { environment } from '../../../environments/environment'

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient) {} 

    getArticle(slug: string): Observable<ArticleInterface> {
        const fullUrl = `${environment.apiUrl}/articles/${slug}`;

        return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
            map((response: GetArticleResponseInterface) => {
                return response.article
            })
        )
    }
}