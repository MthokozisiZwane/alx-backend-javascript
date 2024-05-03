function calculateNumber(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
