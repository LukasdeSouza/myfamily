function handleOnKeyDown(event, callBack) {
  if (event?.code === "Enter") {
    callBack()
  }
}

export { handleOnKeyDown }