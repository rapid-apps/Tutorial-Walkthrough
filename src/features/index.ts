import { combineReducers } from "@reduxjs/toolkit";

import { History } from "history";

import {reducer as signupFormReducer} from './SignupForm/slice';
import {SignupFormStateType as signupFormStateType} from './SignupForm/types';

import {reducer as validatorReducer} from './Validator/slice';
import {ValidatorStateType as validatorStateType} from './Validator/types';


export interface ApplicationState {
    signupForm: signupFormStateType,
    validator: validatorStateType
}

export const createRootReducer = (history: History) => combineReducers({
    signupForm: signupFormReducer,
    validator: validatorReducer
});
