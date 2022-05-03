import { useState } from 'react';
import {
  // createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import {
  SignInContainer,
  SignInHeading,
  ButtonContainer,
} from './sign-in-form.styles.jsx';

import Button, { BUTTON_TYPE_CLASSES } from '../buttons/buttons.component';

const deafultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(deafultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(deafultFormFields);
  };

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
    // createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // authenticate user with email + pass
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        alert('Username/Password Incorrect!');
      } else {
        console.log(`Error logging in: ${error}`);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInHeading>Already have an account?</SignInHeading>
      <span>Sign In</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          required
          autoComplete='on'
          onChange={handleChange}
          value={email}
          id='email'
        />

        <FormInput
          label='Password'
          name='password'
          type='password'
          required
          autoComplete='on'
          onChange={handleChange}
          value={password}
          id='password'
        />

        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            value='Sign Up'
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google
          </Button>
        </ButtonContainer>

        {/*<button type='submit'>Sign Up</button>*/}
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
