export default function iterateThroughObject(reportWithIterator) {
    let result = '';
  
    for (const department in reportWithIterator.allEmployees) {
      result += reportWithIterator.allEmployees[department].join(' | ');
  
      if (department !== Object.keys(reportWithIterator.allEmployees)[Object.keys(reportWithIterator.allEmployees).length - 1]) {
        result += '\n';
      }
    }
  
    return result;
  }
  