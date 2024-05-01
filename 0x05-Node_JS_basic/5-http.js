const http = require('http');
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = {
      CS: [],
      SWE: [],
    };
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (field === 'CS' || field === 'SWE') {
        students[field].push(firstname);
      }
    }
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const students = await readDatabase('database.csv');
      const totalStudents = Object.values(students).reduce((total, field) => total
                                                           + field.length, 0);
      const responseLines = [
        'This is the list of our students',
        `Number of students: ${totalStudents}`,
      ];
      Object.keys(students).forEach((field) => {
        responseLines.push(`Number of students in ${field}:${students[field].length}. List: ${students[field].join(', ')}`);
      });
      res.end(responseLines.join('\n'));
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Endpoint not found');
  }
});

app.listen(1245);

module.exports = app;
