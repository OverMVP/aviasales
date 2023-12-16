// @ts-nocheck
import { FC, useEffect } from 'react';
import HeaderLogo from '../HeaderLogo';
import Filter from '../Filter/Filter';
import styles from './App.module.scss';
import TicketList from '../TicketList';
import TicketsOptions from '../TicketsOptions';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { getAsyncTickets } from '../../store/asyncActions/getAsyncTickets';
import getSearchId from '../../api';

const { pageWrapper, contentWrapper, asideWrapper, main } = styles;

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchId().then(() => {
      dispatch(getAsyncTickets());
    });

    return Cookies.remove('searchId');
  }, [dispatch]);

  return (
    <>
      <HeaderLogo />
      <div className={pageWrapper}>
        <div className={contentWrapper}>
          <aside className={asideWrapper}>
            <TicketsOptions />
          </aside>
          <main className={main}>
            <Filter />
            <TicketList />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
