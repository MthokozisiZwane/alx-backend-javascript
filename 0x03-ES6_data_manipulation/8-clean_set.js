function cleanSet(set, startString) {
  let result = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      const trimmedValue = value.slice(startString.length);
      result += trimmedValue + '-';
    } else if (startString === '') {
      result += value + '-';
    }
  });
  return result.slice(0, -1);
}

export default cleanSet;
