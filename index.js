class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return this.grades.length ? sum / this.grades.length : 0;
  }

  present() {
    this.recordAttendance(true);
  }

  absent() {
    this.recordAttendance(false);
  }

  recordAttendance(status) {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = status;
    } else {
      console.log("Масив відвідуваності заповнений.");
    }
  }

  getAttendanceRate() {
    const presentDays = this.attendance.filter((day) => day === true).length;
    const totalDays = this.attendance.filter((day) => day !== null).length;
    return totalDays ? presentDays / totalDays : 0;
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (avgGrade >= 90 && attendanceRate >= 0.9) {
      return "Молодець!";
    } else if (avgGrade >= 90 || attendanceRate >= 0.9) {
      return "Добре, але можна краще.";
    } else {
      return "Редиска!";
    }
  }

  getStudentInfo() {
    console.log(this.firstName + ' ' + this.lastName + ', ' + this.getAge() + ' років:');
    console.log('Середній бал: ' + this.getAverageGrade());
    console.log('Середнє відвідування: ' + this.getAttendanceRate());
    console.log(this.summary());
  }
  
}

const student1 = new Student("Іван", "Іванов", 2000);
student1.addGrade(95);
student1.addGrade(89);
student1.present();
student1.present();
student1.absent();

student1.getStudentInfo();
