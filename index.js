class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = Array(25).fill(null);  // Заповнюємо масив null
    }

    present() {
        const index = this.attendance.findIndex(item => item === null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Максимальна кількість записів вже досягнута!");
        }
    }

    absent() {
        const index = this.attendance.findIndex(item => item === null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Максимальна кількість записів вже досягнута!");
        }
    }

    calculateAge(currentYear) {
        return currentYear - this.birthYear;
    }

    calculateAvgGrade() {
        if (this.grades.length > 0) {
            const sum = this.grades.reduce((total, grade) => total + grade, 0);
            return sum / this.grades.length;
        } else {
            return 0;
        }
    }

    calculateAvgAttendance() {
        if (this.attendance.length > 0) {
            const presentCount = this.attendance.filter(item => item === true).length;
            return presentCount / this.attendance.length;
        } else {
            return 0;
        }
    }

    summary() {
        const avgGrade = this.calculateAvgGrade();
        const avgAttendance = this.calculateAvgAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Створюємо екземпляри студентів
const student1 = new Student("Іван", "Петров", 2000);
const student2 = new Student("Марія", "Коваленко", 2002);
const student3 = new Student("Олексій", "Сидоренко", 2001);

// Використання методів
student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();

student3.present();
student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
