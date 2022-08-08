class University {
    constructor (teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }
    addMember (...persons) {
        for (let member of persons ) {
            if (member.role === 'teacher') {
                this.teachers[this.teachers.length] = member;
            } else if (member.role === 'student') {
                this.students[this.students.length] = member;
            } else {
                console.log ('you should enter student or teacher');
            }
        }
    }
    removeMember (...persons) {
        for(let member of persons) {
             if (member.role === 'teacher') {
                for(let i = 0; i < this.teachers.length; i++) {
                    if(this.teachers[i].name === member.name) {
                        this.teachers.splice(i,1)
                        break;
                    }
                }
            } else if (member.role === 'student') {
                for(let i = 0; i < this.students.length; i++) {
                    if(this.students[i].name === member.name) {
                        this.students.splice(i,1)
                        break;
                    }
                }
            } else {
                console.log(`this member isn't teacher or student`)
            }
        }
    }
    startLesson () {
       for (let member of this.students) {
            if (member.energy >= 2) {
                member.energy -= 2;
            } else {
                member.energy = 'student_mode: snooz';
            }
       };
        for (let member of this.teachers) {
            if (member.energy >= 5) {
                 member.energy -= 5;
            } else {
                member.energy = 'the teacher needs vacation';
            }
        }
    }
};

class UniversityMember {
    constructor (name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }
    info () {
        return `name: ${this.name}; age: ${this.age}; role: ${this.role}; ENERGY: => ${this.energy} <= `;
    }
};

class Students extends UniversityMember {};
class Teachers extends UniversityMember {};
/////// 
let student1 = new Students('Artash', 20, 'student',30);
let student2 = new Students('Smbat', 19, 'student', 100);
let student3 = new Students('Mamikon', 49, 'student',4);

let teacher1 = new Teachers('Mis`s Brigth' ,27,'teacher',30);
let teacher2 = new Teachers('Mr Smith', 58, 'teacher',10);
let teacher3 = new Teachers('Mis`s Popins', 123,'teacher', 5);

let university = new University();

//////////////////////
//function call ===>
university.addMember(student1,student2,student3, teacher1,  teacher2, teacher3);
university.removeMember(student1, teacher3);
university.startLesson();
university.startLesson();
university.startLesson();
teacher2.info();
student3.info();