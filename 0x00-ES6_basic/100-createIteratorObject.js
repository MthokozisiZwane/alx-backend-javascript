export default function createIteratorObject(report) {
  const iterator = {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
          for (const employee of report.allEmployees[department]) {
            yield employee;
          }
        }
      }
    },
  };
  return iterator;
}
