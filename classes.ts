abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

// abstract: Serve de modelo para outras classes, mas n pode ser criado nada a partir dela

class CharAccount extends UserAccount {
    private nickname: string;
    // readonly level: number;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log('-----GET-----');
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and he has de chat ${this.nickname} at lavel ${this.level}.`);
    }
}

// const ths = new UserAccount('Thiago', 34);
// console.log(ths);
// // console.log(ths.age);
// ths.logDetails();

const john = new CharAccount('John', 45, 'super_john', 80);

// john.nickname = 'Santos';
console.log(john);
console.log(john.level);
// john.legal = 799;
john.logDetails();
john.logCharDetails();

// private: pode chamar somente dentro da classe.
// readonly: Não pode ser etidato fora da classe, mas pode ser lido.
// public: Poder ser editada e lida dentro ou fora da classe.
// protected: consegue chamar dentro da classe que extende, mas não fora da claase e da classe que está estendendo.

john.setLevel = 201;
console.log(john.getLevel)




