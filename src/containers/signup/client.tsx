import {useSelector} from 'react-redux';
import { useEffect } from 'react';

import ClientSignup from '../../pages/signup/client';
import * as signupForm from '../../features/SignupForm/slice';
import * as signupFormTypes from '../../features/SignupForm/types';
import * as validator from '../../features/Validator/slice';

var Email: signupFormTypes.InputTextElement;
var NameForm: signupFormTypes.InputTextElement;
var isValidEmail: boolean;


// These variables will be given as part of documentation/filled by the manager
var email_sizes: signupFormTypes.InputTextSize[] = [
  {'min': 12, 'max': 20, 'inputTextElementSize': 'normal'},
  {'min': 4, 'max': 12, 'inputTextElementSize': 'small'},
  {'min': 20, 'max': 40, 'inputTextElementSize': 'large'}
];

var name_sizes: signupFormTypes.InputTextSize[] = [
  {'min': 12, 'max': 20, 'inputTextElementSize': 'normal'},
  {'min': 4, 'max': 12, 'inputTextElementSize': 'small'},
  {'min': 20, 'max': 40, 'inputTextElementSize': 'large'}
];


/*
The below functions are simply just to mock an API call. Real apps would require
calling an external API.
*/
function sleep (time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function send_name_callback(...varargs: any): Promise<any> {
  await sleep(1000);
  return new Promise(resolve => resolve({'token': 'hello_token', 'isSuccess': true}));
}

async function login_callback(...varargs: any): Promise<any> {
  await sleep(1000);
  return new Promise(resolve => resolve({'token': 'bearer_token_value', 'isSuccess': true}));
}


/*
These are the set of functions that the devs write as part of wiring code for
any given page.
*/
function set_user_id(email: string) {
  validator.validate(Email.value)
  signupForm.inputTextSet("email", email, 'Email', 'normal', '', '', '');
}

function send_name() {
  if (isValidEmail) {
    signupForm.inputTextSet("email", Email.value, 'Email', 'normal', '', '', 'Incorrect Name');
  }
}

function set_name(name: string) {
  signupForm.inputTextSet("name", name, 'Name', 'normal', '', '', '');
}

function signup_user() {
  console.log('called signup_user');
}

function handle_key_press(e: string) {
  if (e === 'Enter') {
    if (isValidEmail) {
      send_name();
    }
  }
}

const SignupContainerClient = () => {
  Email = useSelector(signupForm.selectEmail)
  NameForm = useSelector(signupForm.selectName)
  isValidEmail = useSelector(validator.selectIsValidEmail)

  useEffect(() => {
    signupForm.inputTextInit("email", true, false, false, false, true, false, true, email_sizes);
    signupForm.inputTextInit("name", true, false, false, false, true, false, false, name_sizes);
  }, []);

  return (
    <ClientSignup
      sendName={send_name}
      signupUser={signup_user}
      isEmailValid={isValidEmail}
      setName={set_name}
      setUserId={set_user_id}
      handleKeyPress={handle_key_press} />
    );
}

export default SignupContainerClient;
