var Student = /** @class */ (function () {
    function Student(indexNumber, grades) {
        this.indexNumber = indexNumber;
        this.grades = grades;
    }
    Student.prototype.getTotalGrade = function () {
        return this.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    };
    Student.prototype.getAverageGrade = function () {
        return this.getTotalGrade() / this.grades.length;
    };
    return Student;
}());
function quickSort3(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].getTotalGrade() < pivot.getTotalGrade()) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort3(left).concat(pivot, quickSort3(right));
}
function getRanking(students, indexNumber) {
    var sortedStudents = quickSort3(students);
    for (var i = 0; i < sortedStudents.length; i++) {
        if (sortedStudents[i].indexNumber === indexNumber) {
            return i + 1;
        }
    }
    return -1;
}
var students = [
    new Student(123456, [2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4]),
    new Student(234567, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]),
    new Student(345678, [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3]),
];
console.log(getRanking(students, 123456)); // 1
console.log(getRanking(students, 234567)); // 3
console.log(getRanking(students, 345678)); // 2
console.log(getRanking(students, 999999)); // -1
