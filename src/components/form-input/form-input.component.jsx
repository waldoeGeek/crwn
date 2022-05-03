import { Group, FormInputLabel, FormInputs } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputs {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={label} shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
