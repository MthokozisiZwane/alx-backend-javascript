const fs = require('fs').promises;

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

module.exports = { readDatabase };
