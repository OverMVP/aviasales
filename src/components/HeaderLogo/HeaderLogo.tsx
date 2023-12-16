import { FC } from 'react';
import styles from './HeaderLogo.module.scss';
import logo from '../../assets/logo.png';

const { headerContainer } = styles;

const HeaderLogo: FC = () => {
  return (
    <header className={headerContainer}>
      <img src={logo} alt="" />
    </header>
  );
};

export default HeaderLogo;
