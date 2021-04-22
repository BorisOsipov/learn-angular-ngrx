import {CurrentUserInterface} from '../../shared/types/curentUser.interface';
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
