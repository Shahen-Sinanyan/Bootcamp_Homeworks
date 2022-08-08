class Character {
    constructor (name, type, health = 100, level = 1, attack, defense) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
        
        if (this.name.length < 2 || this.name.length > 10 ) {
            throw new Error ('Your string length must be more than 1 and less than 11')
        };
        if (type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon'
    || type === 'Undead' || type === 'Zombie') {
            this.type = type
        } else {
            throw new Error ('your type is not match to our requiremants')
        }
    } 
    levelUp () {
        if (this.health > 0) {
            this.level++;
            this.attack += (this.attack*20/100);
            this.defense += (this.defense*20/100);
            this.health = 100
            return `level:${this.level}, attack:${this.attack}, defense:${this.defense}, health:${this.health}`
        } else {
            throw new Error('you cannot increase the level of the deceased');
        }
    }
    damage (points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defense / 100);
        }   
    }
};

 class Bowerman extends Character {
    constructor (name , type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defense = 25;
    }
     levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};
class Swordsman extends Character {
    constructor (name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defense = 10;
    }
    levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};
class Magician extends Character {
    constructor (name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defense = 40;
    }
     levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};
class Undead extends Character {
    constructor (name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defense = 25;
    }
     levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};
class Zombie extends Character {
    constructor (name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defense = 10;
    }
     levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};
class Daemon extends Character {
    constructor (name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defense = 40;
    }
     levelUp () {
         return super.levelUp();
     }
     damage(points) {
         super.damage(points);
     }     
};



