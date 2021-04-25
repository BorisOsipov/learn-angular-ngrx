import {CurrentUserInterface} from '../../shared/types/curent-user.interface';
import {BackendErrorsInterface} from '../../shared/types/backend-errors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
