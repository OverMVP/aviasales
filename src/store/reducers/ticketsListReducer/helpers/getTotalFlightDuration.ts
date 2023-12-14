export const getTotalFlightDuration = (obj: any) => {
  return obj.segments[0].duration + obj.segments[1].duration
}
