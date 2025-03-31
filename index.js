function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(null);

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };

  this.addGrade = function (grade) {
    this.grades.push(grade);
  };

  this.getAverageGrade = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return this.grades.length ? sum / this.grades.length : 0;
  };

  this.present = function () {
    this.recordAttendance(true);
  };

  this.absent = function () {
    this.recordAttendance(false);
  };

  this.recordAttendance = function (status) {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = status;
    } else {
      console.log("Масив відвідуваності заповнений.");
    }
  };

  this.getAttendanceRate = function () {
    const presentDays = this.attendance.filter((day) => day === true).length;
    const totalDays = this.attendance.filter((day) => day !== null).length;
    return totalDays ? presentDays / totalDays : 0;
  };

  this.summary = function () {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (avgGrade >= 90 && attendanceRate >= 0.9) {
      return "Молодець!";
    } else if (avgGrade >= 90 || attendanceRate >= 0.9) {
      return "Добре, але можна краще.";
    } else {
      return "Редиска!";
    }
  };

  this.getStudentInfo = function () {
    console.log(
      this.firstName + " " + this.lastName + ", " + this.getAge() + " років:"
    );
    console.log("Середній бал: " + this.getAverageGrade());
    console.log("Середнє відвідування: " + this.getAttendanceRate());
    console.log(this.summary());
  };
}

const student1 = new Student("Іван", "Іванов", 2000);
student1.addGrade(95);
student1.addGrade(89);
student1.present();
student1.present();
student1.absent();

student1.getStudentInfo();

const student2 = new Student("Марина", "Маринівна", 2001);
student2.addGrade(98);
student2.addGrade(95);
student2.present();
student2.present();
student2.present();

student2.getStudentInfo();