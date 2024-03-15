interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 35,
  location: "Miami"
};

const student2: Student = {
  firstName: "Mtho",
  lastName: "Zwane",
  age: 22,
  location: "Soweto"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
