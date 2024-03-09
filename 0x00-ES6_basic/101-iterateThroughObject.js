export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = reportWithIterator.map((employee) => employee); // Get a list of employee names
  return employeeNames.join(' | ');
}
