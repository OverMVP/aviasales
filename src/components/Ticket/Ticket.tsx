import React, { FC } from 'react';
import styles from './Ticket.module.scss';
import { formatArrivalAndDepartureTime, formatFlightTime, formatPrice, formatTransfers } from './helpers';

const {
  ticket,
  'ticket-header': ticketHeader,
  priceClass,
  'routes-wrapper': routesWrapper,
  'forward-route': forwardRoute,
  'backward-route': backwardRoute,
  route,
  flightTime,
  transfer,
} = styles;

export interface ITicketProps {
  price: number;
  carrier: string;
  forward: IRoute;
  backward: IRoute;
}

export interface IRoute {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}

const Ticket: FC<ITicketProps> = ({ price, carrier, forward, backward }) => {
  return (
    <li className={ticket}>
      <div className={ticketHeader}>
        <h3 className={priceClass}>{formatPrice(price)}</h3>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="s7logo" />
      </div>
      <div className={routesWrapper}>
        <div className={forwardRoute}>
          <div className={route}>
            <span>
              {forward.origin} - {forward.destination}
            </span>
            <span>{formatArrivalAndDepartureTime(forward)}</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>{formatFlightTime(forward.duration)}</span>
          </div>
          <div className={transfer}>
            <span>
              {forward.stops.length > 0 ? forward.stops.length : null} {formatTransfers(forward.stops)}
            </span>
            <span>{forward.stops.length > 0 ? forward.stops.map((el: any) => `${el}`).join(', ') : ''}</span>
          </div>
        </div>

        <div className={backwardRoute}>
          <div className={route}>
            <span>
              {backward.origin} - {backward.destination}
            </span>
            <span>{formatArrivalAndDepartureTime(backward)}</span>
          </div>
          <div className={flightTime}>
            <span>В пути</span>
            <span>{formatFlightTime(backward.duration)}</span>
          </div>
          <div className={transfer}>
            <span>
              {backward.stops.length > 0 ? backward.stops.length : null} {formatTransfers(backward.stops)}
            </span>
            <span>{backward.stops.length > 0 ? backward.stops.map((el: any) => `${el}`).join(', ') : ''}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
