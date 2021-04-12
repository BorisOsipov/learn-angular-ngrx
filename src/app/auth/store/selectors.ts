import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../shared/app.state.interface';
import {AuthStateInterface} from '../types/authState.interface';

export const authFeatureSelectors = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelectors,
  (authState) => authState.isSubmitting
);
