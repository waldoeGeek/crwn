import { useState } from 'react';
import {
  // createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

// import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss';
import Button from '../buttons/buttons.component';

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
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
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

        <div className='buttons-container'>
          <Button value='Sign Up' buttonType=''>
            Sign In
          </Button>
          <Button
            value='Sign Up'
            type='button'
            buttonType='google'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>

        {/*<button type='submit'>Sign Up</button>*/}
      </form>
    </div>
  );
};

export default SignInForm;
