import React, { FC } from 'react';
import styles from './Loader.module.scss';

const { loader } = styles;

const Loader: FC = () => {
  return <div className={loader}></div>;
};

export default Loader;
