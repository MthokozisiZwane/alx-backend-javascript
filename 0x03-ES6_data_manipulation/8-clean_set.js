function cleanSet(set, startString) {
  let result = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      const trimmedValue = value.slice(startString.length);
      result += trimmedValue + '-';
    }
  });
  if (result.length === 0) {
    return '';
  } else {
    return result.slice(0, -1);
  }
}

export default cleanSet;
