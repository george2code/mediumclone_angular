import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from "./services/popularTags.service";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { RouterModule } from "@angular/router";
import { LoadingModule } from "../loading/loading.module";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";

@NgModule({
    imports: [CommonModule, 
        RouterModule,
        StoreModule.forFeature('popularTags', reducers), 
        EffectsModule.forFeature([GetPopularTagsEffect]),
        LoadingModule,
        ErrorMessageModule
    ],
    declarations: [
        PopularTagsComponent
    ],
    providers: [PopularTagsService],
    exports: [PopularTagsComponent]
})
export class PopularTagsModule {}