import { createAction, props } from "@ngrx/store"
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface"
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface"
import { CurrentUserInputInterface } from "../../../shared/types/currentUserInput.interface"
import { ActionTypes } from "../actionTypes"

export const updateCurrentUserAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER,
    props<{currentUserInput: CurrentUserInputInterface}>()
)

export const updateCurrentUserSuccessAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_SUCCESS, 
    props<{currentUser: CurrentUserInterface}>()
)

export const updateCurrentUserFailureAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_FAILURE,
    props<{errors: BackendErrorsInterface}>()    
)