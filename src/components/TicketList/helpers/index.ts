export function sortFollowToCheckBoxes(arr: any, filterTransfersObj: any) {
  let sortedTickets = [...arr]

  filterTransfersObj.forEach((obj: any) => {
    if (!obj.isChecked) {
      sortedTickets = sortedTickets.filter((ticket) => {
        return (
          ticket.segments[0].stops.length !== obj.value &&
          ticket.segments[1].stops.length !== obj.value
        )
      })
    }
  })
  return sortedTickets
}
