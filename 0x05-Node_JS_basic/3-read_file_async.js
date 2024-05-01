const fs = require('fs');

/**
 * Counts the number of students in each field from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} A Promise that resolves when the counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).map((line) => line.split(','));
        const fields = {};

        students.forEach((student) => {
          const [, , , field] = student;
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(student[0]);
          }
        });

        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
