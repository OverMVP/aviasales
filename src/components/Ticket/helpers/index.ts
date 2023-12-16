import add from 'date-fns/add';
import format from 'date-fns/format';
import { IRoute } from '../Ticket';

export function formatPrice(price: any): any {
  const RUB = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 6,
  });
  return RUB.format(price);
}

export function formatTransfers(arr: string[]) {
  if (arr.length === 1) return `пересадка`;
  if (arr.length > 1 && arr.length < 5) return `пересадки`;
  if (arr.length >= 5) return `пересадок`;
  return 'Без пересадок';
}

export function formatFlightTime(minutes: number) {
  let hh = Math.floor(minutes / 60).toString();
  let mins = (minutes %= 60);
  if (mins >= 0 && mins <= 9) {
    return `${hh}ч 0${mins}м`;
  }
  return `${hh}ч ${mins}м`;
}

export function formatArrivalAndDepartureTime(obj: IRoute): string {
  const departureTime = format(new Date(obj.date), 'hh:mm');
  const arrivalTime = format(add(new Date(obj.date), { minutes: obj.duration }), 'hh:mm');
  return `${departureTime} - ${arrivalTime}`;
}
