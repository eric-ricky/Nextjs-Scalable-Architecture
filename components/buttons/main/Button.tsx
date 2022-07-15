import styles from './Button.module.css';

export interface IButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={`${styles['storybook-button']} ${
        styles[`storybook-button--${size}`]
      }  ${styles[mode]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
