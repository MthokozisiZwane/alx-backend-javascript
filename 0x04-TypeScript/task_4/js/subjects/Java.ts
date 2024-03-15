namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingJava === undefined) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this._teacher.firstName}`;
      }
    }
  }
}
