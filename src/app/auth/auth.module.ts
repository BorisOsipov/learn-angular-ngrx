import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {RegisterComponent} from './components/register/register.component';
import {reducers} from './store/reducer';
import {AuthService} from './services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backend-error-messages.module';
import {PersistenceService} from '../shared/services/persistence.service';
import {LoginEffect} from './store/effects/login.effect';
import {LoginComponent} from './components/login/login.component';
import {GetCurrentUserEffect} from './store/effects/get-current-user.effect';

const routes: Routes = [{
  path: 'register',
  component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {
}
