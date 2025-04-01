import {NgModule} from '@angular/core'
import {CommonModule} from  '@angular/common';
import {RouterModule} from  '@angular/router';
import {EffectsModule} from  '@ngrx/effects';
import { StoreModule} from  '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService as SharedArticleServcie } from '../shared/services/article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ArticleComponent } from './components/feed/article.component';
import { TagListModule } from "../shared/modules/tagList/tagList.module";

const routes = [
    { path: 'articles/:slug', component: ArticleComponent }
]


@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        RouterModule.forChild(routes),
        TagListModule
    ], 
    declarations: [ArticleComponent],
    exports: [],
    providers: [SharedArticleServcie]
})
export class ArticleModule {}