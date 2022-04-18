import Authentication from '../../routes/authentication/authentication.component';
import './buttons.styles.scss';

// export const GoogleButton = () => {
//   return <button></button>;
// };

// export const MainButton = ({ value }) => {
//   return <button className='main-button'>{value}</button>;
// };

// export const invertedButton = () => {

// }

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
