class Student {
  indexNumber: number;
  grades: number[];

  constructor(indexNumber: number, grades: number[]) {
    this.indexNumber = indexNumber;
    this.grades = grades;
  }

  getTotalGrade(): number {
    return this.grades.reduce((sum, grade) => sum + grade, 0);
  }

  getAverageGrade(): number {
    return this.getTotalGrade() / this.grades.length;
  }
}

function quickSort3(arr: Student[]): Student[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: Student[] = [];
  const right: Student[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].getTotalGrade() < pivot.getTotalGrade()) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort3(left).concat(pivot, quickSort3(right));
}

function getRanking(students: Student[], indexNumber: number): number {
  const sortedStudents = quickSort3(students);
  for (let i = 0; i < sortedStudents.length; i++) {
    if (sortedStudents[i].indexNumber === indexNumber) {
      return i + 1;
    }
  }

  return -1;
}

const students: Student[] = [
  new Student(123456, [2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4]),
  new Student(234567, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]),
  new Student(345678, [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3]),
];

// im wiecej liczba tym wyszej student na liscie rankingowej (nie udało zaimplemetować inaczej);
console.log(getRanking(students, 123456)); // 2
console.log(getRanking(students, 234567)); // 3
console.log(getRanking(students, 345678)); // 1

console.log(getRanking(students, 999999)); // -1 - student nie istneje w systemie