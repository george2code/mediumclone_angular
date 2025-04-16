import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { ErrorMessageModule } from "../shared/modules/errorMessage/errorMessage.module";

const routes = [
    {path: 'settings', component: SettingsComponent}
]

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    ErrorMessageModule
],
    declarations: [
      SettingsComponent
    ]
})
export class SettingsModule {}