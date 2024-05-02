const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('database.csv');
      const fieldCounts = {};

      // Count students in each field
      data.forEach((student) => {
        if (!(student.field in fieldCounts)) {
          fieldCounts[student.field] = [];
        }
        fieldCounts[student.field].push(student.firstname);
      });

      // Construct the response with field counts
      let response = 'This is the list of our students\n';
      let totalStudents = 0;
      for (const field in fieldCounts) {
        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
          const count = fieldCounts[field].length;
          response += `Number of students in ${field}: ${count}. List: ${fieldCounts[field].join(', ')}\n`;
          totalStudents += count;
        }
      }

      // Add total number of students at the beginning
      response = `This is the list of our students\nNumber of students: ${totalStudents}\n${response}`;

      // Send the response with the list of students
      res.send(response);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('database.csv');
      const students = data.filter((student) => student.field.toUpperCase() === major);
      const studentNames = students.map((student) => student.firstname);

      // Construct the response with student names
      const response = `List: ${studentNames.join(', ')}`;

      // Send the response with the list of students in the specified major
      res.send(response);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

