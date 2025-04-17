import {NgModule} from '@angular/core'
import {CommonModule} from  '@angular/common';
import {RouterModule} from  '@angular/router';
import {EffectsModule} from  '@ngrx/effects';
import { StoreModule} from  '@ngrx/store';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { FeedService } from './services/feed.service';
import { reducers } from './store/reducers';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tagList/tagList.module';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';


@NgModule({
    imports: [
        CommonModule, 
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducers),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule,
        AddToFavoritesModule,
    ], 
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: [FeedService]
})
export class FeedModule {}
