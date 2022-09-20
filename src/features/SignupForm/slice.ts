import * as SignupFormTypes from "./types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Store, Dispatch } from 'redux';
import * as _ from 'lodash';
const rfdc = require('rfdc')();
function setEmailReducer(state: SignupFormTypes.SignupFormStateType, payload: SignupFormTypes.SetEmailReducerPayload): SignupFormTypes.SignupFormStateType {
	var newState: SignupFormTypes.SignupFormStateType = state
	var newVal: SignupFormTypes.InputTextElement = {...state.email};
	newVal.value = payload.value;
	newVal.label = payload.label;
	newVal.textSize = payload.textSize;
	newVal.helperText = payload.helperText;
	newVal.iconName = payload.icon;
	newVal.validationText = payload.validationText;
	var newEmail: SignupFormTypes.InputTextElement = rfdc(newVal);
	newState = {...newState, email: newEmail}
	return newState
}

function resetEmailReducer(state: SignupFormTypes.SignupFormStateType, payload: SignupFormTypes.ResetEmailReducerPayload): SignupFormTypes.SignupFormStateType {
	var newState: SignupFormTypes.SignupFormStateType = state
	var newVal: SignupFormTypes.InputTextElement = {...state.email};
	newVal.hasLabel = payload.hasLabel;
	newVal.hasFloatingLabel = payload.hasFloatingLabel;
	newVal.disabled = payload.disabled;
	newVal.hidden = payload.hidden;
	newVal.hasHelperText = payload.hasHelperText;
	newVal.hasIcon = payload.hasIcon;
	newVal.hasValidationText = payload.hasValidationText;
	newVal.sizeRanges = payload.sizeRanges;
	var newEmail: SignupFormTypes.InputTextElement = rfdc(newVal);
	newState = {...newState, email: newEmail}
	var newFormFieldError: SignupFormTypes.Error = {code: 0,message: ""};
	newState = {...newState, formFieldError: newFormFieldError}
	return newState
}

function setNameReducer(state: SignupFormTypes.SignupFormStateType, payload: SignupFormTypes.SetEmailReducerPayload): SignupFormTypes.SignupFormStateType {
	var newState: SignupFormTypes.SignupFormStateType = state
	var newVal: SignupFormTypes.InputTextElement = {...state.name};
	newVal.value = payload.value;
	newVal.label = payload.label;
	newVal.textSize = payload.textSize;
	newVal.helperText = payload.helperText;
	newVal.iconName = payload.icon;
	newVal.validationText = payload.validationText;
	var newName: SignupFormTypes.InputTextElement = rfdc(newVal);
	newState = {...newState, name: newName}
	return newState
}

function resetNameReducer(state: SignupFormTypes.SignupFormStateType, payload: SignupFormTypes.ResetEmailReducerPayload): SignupFormTypes.SignupFormStateType {
	var newState: SignupFormTypes.SignupFormStateType = state
	var newVal: SignupFormTypes.InputTextElement = {...state.name};
	newVal.hasLabel = payload.hasLabel;
	newVal.hasFloatingLabel = payload.hasFloatingLabel;
	newVal.disabled = payload.disabled;
	newVal.hidden = payload.hidden;
	newVal.hasHelperText = payload.hasHelperText;
	newVal.hasIcon = payload.hasIcon;
	newVal.hasValidationText = payload.hasValidationText;
	newVal.sizeRanges = payload.sizeRanges;
	var newName: SignupFormTypes.InputTextElement = rfdc(newVal);
	newState = {...newState, name: newName}
	var newFormFieldError: SignupFormTypes.Error = {code: 0,message: ""};
	newState = {...newState, formFieldError: newFormFieldError}
	return newState
}

function setErrorReducer(state: SignupFormTypes.SignupFormStateType, payload: SignupFormTypes.SetErrorReducerPayload): SignupFormTypes.SignupFormStateType {
	var newState: SignupFormTypes.SignupFormStateType = state
	var x: SignupFormTypes.Error = {code: 0,message: ""};
	x.code = payload.errCode;
	x.message = payload.errMsg;
	var newFormFieldError: SignupFormTypes.Error = rfdc(x);
	newState = {...newState, formFieldError: newFormFieldError}
	return newState
}

// generate_data_store_elem 
// generate_data_store_elem 
// generate_data_store_elem 
const initialState: SignupFormTypes.SignupFormStateType = {
	email: {
		value: "",
		hasLabel: false,
		label: "",
		hasFloatingLabel: false,
		textSize: "",
		sizeRanges: [],
		hasHelperText: false,
		helperText: "",
		hasIcon: false,
		iconName: "",
		hasValidationText: false,
		validationText: "",
		hidden: false,
		disabled: false
	},
	formFieldError: {
		code: 0,
		message: ""
	},
	name: {
		value: "",
		hasLabel: false,
		label: "",
		hasFloatingLabel: false,
		textSize: "",
		sizeRanges: [],
		hasHelperText: false,
		helperText: "",
		hasIcon: false,
		iconName: "",
		hasValidationText: false,
		validationText: "",
		hidden: false,
		disabled: false
	}
};

const signupFormSlice = createSlice({
    name: 'signupForm',
    initialState,
    reducers: {
        
        signupFormResetEmail(state: any, action: PayloadAction<SignupFormTypes.ResetEmailReducerPayload>) {
            state = resetEmailReducer(state, action.payload);
            return state;
        },
        
        signupFormSetName(state: any, action: PayloadAction<SignupFormTypes.SetEmailReducerPayload>) {
            state = setNameReducer(state, action.payload);
            return state;
        },
        
        signupFormResetName(state: any, action: PayloadAction<SignupFormTypes.ResetEmailReducerPayload>) {
            state = resetNameReducer(state, action.payload);
            return state;
        },
        
        signupFormSetError(state: any, action: PayloadAction<SignupFormTypes.SetErrorReducerPayload>) {
            state = setErrorReducer(state, action.payload);
            return state;
        },
        
        signupFormSetEmail(state: any, action: PayloadAction<SignupFormTypes.SetEmailReducerPayload>) {
            state = setEmailReducer(state, action.payload);
            return state;
        },
        
    },
})


export function selectEmail(state: any): SignupFormTypes.InputTextElement {
    return state.signupForm.email
}

export function selectFormFieldError(state: any): SignupFormTypes.Error {
    return state.signupForm.formFieldError
}

export function selectName(state: any): SignupFormTypes.InputTextElement {
    return state.signupForm.name
}


export const { signupFormResetEmail, signupFormSetName, signupFormResetName, signupFormSetError, signupFormSetEmail } = signupFormSlice.actions
var reducer = signupFormSlice.reducer
export {reducer}

var store: Store
var dispatch: Dispatch = (...args: any) => {
    throw new Error(
        'configure for signupForm must be called before Dispatch'
    )
}

export function configure(global_store: Store) {
    store = global_store
    dispatch = store.dispatch
}
// generate_method 
export async function inputTextSet(inputTextFieldName: string, value: string, label: string, textSize: string, helperText: string, icon: string, validationText: string): Promise<void> {
	if ((inputTextFieldName === "email")) {
		dispatch(signupFormSetEmail({value: value, label: label, textSize: textSize, helperText: helperText, icon: icon, validationText: validationText}));
	}
	if ((inputTextFieldName === "name")) {
		dispatch(signupFormSetName({value: value, label: label, textSize: textSize, helperText: helperText, icon: icon, validationText: validationText}));
	}
}

// generate_method 
export async function inputTextInit(inputTextFieldName: string, hasLabel: boolean, hasFloatingLabel: boolean, disabled: boolean, hidden: boolean, hasHelperText: boolean, hasIcon: boolean, hasValidationText: boolean, sizeRanges: SignupFormTypes.InputTextSize[]): Promise<void> {
	if ((inputTextFieldName === "email")) {
		dispatch(signupFormResetEmail({hasLabel: hasLabel, hasFloatingLabel: hasFloatingLabel, disabled: disabled, hidden: hidden, hasHelperText: hasHelperText, hasIcon: hasIcon, hasValidationText: hasValidationText, sizeRanges: sizeRanges}));
	}
	if ((inputTextFieldName === "name")) {
		dispatch(signupFormResetName({hasLabel: hasLabel, hasFloatingLabel: hasFloatingLabel, disabled: disabled, hidden: hidden, hasHelperText: hasHelperText, hasIcon: hasIcon, hasValidationText: hasValidationText, sizeRanges: sizeRanges}));
	}
}

