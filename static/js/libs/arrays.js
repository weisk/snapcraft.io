function arraysEqual(oldArray, newArray) {
  if (oldArray === newArray) {
    return true;
  }
  if (
    oldArray === null || newArray === null ||
    (oldArray.length !== newArray.length)) {
    return false;
  }

  const _oldArray = oldArray.splice(0);
  const _newArray = newArray.splice(0);

  _oldArray.sort();
  _newArray.sort();

  for(let i = 0; i < _oldArray.length; i++) {
    if (_oldArray[i] !== _newArray[i]) {
      return false;
    }
  }

  return true;
}

export { arraysEqual };