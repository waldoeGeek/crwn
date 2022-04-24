import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';
import Button from '../buttons/buttons.component';

// import { UserContext } from '../../contexts/user.context';

const deafultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(deafultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(deafultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check pass & confirmPass are same
    if (password !== confirmPassword) {
      alert('Passwords Do Not Match');
      return;
    }

    try {
      // authenticate user with email + pass
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);

      //create user Document
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email in Use guy!');
      } else {
        console.log(`Error: ${error}`);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't Have an Account?</h2>
      <span>Sign up with your Email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
          autoComplete='on'
          id='displayName'
        />

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

        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          required
          autoComplete='on'
          onChange={handleChange}
          value={confirmPassword}
          id='confirmPassword'
        />
        <Button value='Sign Up' buttonType=''>
          Sign Up
        </Button>
        {/*<button type='submit'>Sign Up</button>*/}
      </form>
    </div>
  );
};

export default SignUpForm;
