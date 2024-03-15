import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

const cTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };

const cppSubject = new Cpp();
cppSubject.setTeacher(cTeacher);
console.log('C++');
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

const javaSubject = new Java();
javaSubject.setTeacher(cTeacher);
console.log('Java');
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new React();
reactSubject.setTeacher(cTeacher);
console.log('React');
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
