namespace MajorCredits {
  export interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
  }
}

namespace MinorCredits {
  export interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
  }
}

function sumMajorCredits(subject1: MajorCredits.MajorCredits, subject2: MajorCredits.MajorCredits): MajorCredits.MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: MinorCredits.MinorCredits, subject2: MinorCredits.MinorCredits): MinorCredits.MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MinorCredits' };
}
