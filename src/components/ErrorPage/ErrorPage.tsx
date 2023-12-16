import React, { FC } from 'react';
import styles from './ErrorPage.module.scss';
import img from '../../assets/plane.gif';

const { error } = styles;

const ErrorPage: FC = () => {
  return (
    <div className={error}>
      <span>Нет подходящих рейсов...</span>
      <img src={img} alt="Error Page SVG" />
    </div>
  );
};

export default ErrorPage;
