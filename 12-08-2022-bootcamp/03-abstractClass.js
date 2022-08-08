class FirstClass {
    constructor () {
        this.name = 'Ashot';
        this.age = 22;
        if (new.target) {
            throw new Error('this is an abstract class')
        }
    }
}
class SecondClass extends first {
    constructor (name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    foo () {
        return 3
    }
}