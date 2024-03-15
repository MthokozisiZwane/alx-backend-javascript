interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Mtho',
  fullTimeEmployee: false,
  lastName: 'Zwane',
  location: 'Joburg',
  contract: false,
};

console.log(teacher3);

// extend teachers

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// print teachers

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// write a class

interface StudentInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  new(firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
