const fs = require('fs');

/**
 * Counts the number of students in each field from a CSV file synchronously.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.map((line) => line.split(','));
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
