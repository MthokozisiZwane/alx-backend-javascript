namespace Subjects {
  interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for C++';
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingC === undefined) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
    }
  }
}
