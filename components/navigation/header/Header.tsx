import Link from 'next/link';
import Button from '../../buttons/main/Button';
import styles from './Header.module.css';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header {...headerProps} className={`${styles.header} ${className}`}>
      <div className={styles.logo}>Homifys</div>
      <div className={styles.menu}>
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
      </div>
      <div className={styles.auth}>
        <Button label="Login" size="large" />
      </div>
    </header>
  );
};

export default Header;
