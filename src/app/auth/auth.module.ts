import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {RegisterComponent} from './components/register/register/register.component';
import {reducers} from './store/reducer';
import {AuthService} from './services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from '../shared/services/persistence.service';

const routes: Routes = [{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {
}
