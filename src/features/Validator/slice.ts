import * as ValidatorTypes from "./types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Store, Dispatch } from 'redux';
import * as _ from 'lodash';
const rfdc = require('rfdc')();
function validateEmailReducer(state: ValidatorTypes.ValidatorStateType, payload: ValidatorTypes.ValidateEmailReducerPayload): ValidatorTypes.ValidatorStateType {
	var newState: ValidatorTypes.ValidatorStateType = state
	//TODO
	//Validate Email
	//start_2JJEY
	//end_2JJEY
	return newState
}

const initialState: ValidatorTypes.ValidatorStateType = {isValidEmail: false};

const validatorSlice = createSlice({
    name: 'validator',
    initialState,
    reducers: {
        
        validatorValidateEmail(state: any, action: PayloadAction<ValidatorTypes.ValidateEmailReducerPayload>) {
            state = validateEmailReducer(state, action.payload);
            return state;
        },
        
    },
})


export function selectIsValidEmail(state: any): boolean {
    return state.validator.isValidEmail
}


export const { validatorValidateEmail } = validatorSlice.actions
var reducer = validatorSlice.reducer
export {reducer}

var store: Store
var dispatch: Dispatch = (...args: any) => {
    throw new Error(
        'configure for validator must be called before Dispatch'
    )
}

export function configure(global_store: Store) {
    store = global_store
    dispatch = store.dispatch
}
export async function validate(email: string): Promise<void> {
	//TODO
	//Composer for email validation
	//start_3D2DU
	//end_3D2DU
}

