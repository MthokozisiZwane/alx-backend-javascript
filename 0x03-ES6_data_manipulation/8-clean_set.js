function cleanSet(set, startString) {
  let result = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      const trimmedValue = value.slice(startString.length);
      result += trimmedValue + '-';
    }
  });
  return result.slice(0, -1);
}

export default cleanSet;
