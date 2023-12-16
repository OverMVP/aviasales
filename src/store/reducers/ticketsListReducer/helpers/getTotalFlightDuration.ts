import { ITicket } from '../../../../interfaces';

export const getTotalFlightDuration = (obj: ITicket): number => {
  return obj.segments[0].duration + obj.segments[1].duration;
};
