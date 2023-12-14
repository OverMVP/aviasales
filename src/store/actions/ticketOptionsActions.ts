export function checkBoxClicked(id: any) {
  return {
    type: "CHECKBOX_CLICKED",
    payload: id,
  }
}
