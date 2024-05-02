const fs = require('fs').promises;
const express = require('express');

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.map((line) => {
      const [firstname, field] = line.split(',').map((item) => item.trim());
      return { firstname, field };
    });
    return students;
  } catch (error) {
    throw new Error('Cannot read the database');
  }
}

const app = express();

// Route for the "/students" endpoint
app.get('/students', async (req, res) => {
  try {
    const data = await readDatabase('database.csv');
    const fieldCounts = {};

    // Count students in each field
    data.forEach((student) => {
      if (student.field && student.field.trim() !== '') { // Check if field is valid
        if (!(student.field in fieldCounts)) {
          fieldCounts[student.field] = [];
        }
        fieldCounts[student.field].push(student.firstname);
      }
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
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
