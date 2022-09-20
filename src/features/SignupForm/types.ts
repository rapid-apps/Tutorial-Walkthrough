
export interface InputTextSize {
	min: number,
	max: number,
	inputTextElementSize: string
}

export interface Error {
	code: number,
	message: string
}

export interface InputTextElement {
	value: string,
	hasLabel: boolean,
	label: string,
	hasFloatingLabel: boolean,
	textSize: string,
	sizeRanges: InputTextSize[],
	hasHelperText: boolean,
	helperText: string,
	hasIcon: boolean,
	iconName: string,
	hasValidationText: boolean,
	validationText: string,
	hidden: boolean,
	disabled: boolean
}

export interface SignupFormStateType {
	email: InputTextElement,
	formFieldError: Error,
	name: InputTextElement
}

export interface SetErrorReducerPayload {
	errCode: number,
	errMsg: string
}

export interface ResetEmailReducerPayload {
	hasLabel: boolean,
	hasFloatingLabel: boolean,
	disabled: boolean,
	hidden: boolean,
	hasHelperText: boolean,
	hasIcon: boolean,
	hasValidationText: boolean,
	sizeRanges: InputTextSize[]
}

export interface SetEmailReducerPayload {
	value: string,
	label: string,
	textSize: string,
	helperText: string,
	icon: string,
	validationText: string
}

export type SetNameReducerPayload = SetEmailReducerPayload;
export type ResetNameReducerPayload = ResetEmailReducerPayload;
