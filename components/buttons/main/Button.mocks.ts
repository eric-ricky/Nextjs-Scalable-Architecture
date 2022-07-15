import { IButton } from './Button';

const base: IButton = {
  primary: false,
  backgroundColor: 'blue',
  size: 'small',
  label: 'Login',
  onClick: () => console.log('Logingin'),
};

export const mockButtonProps = {
  base,
};
