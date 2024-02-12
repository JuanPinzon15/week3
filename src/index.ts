console.log('It worked.');

let user = {
    name:'Juan',
    age: 19
};

function logObject(user: {name: string, age: number}) {
    console.log(user.name);
}

logObject(user);

//class User {
  //  name: string = '';
    //age: number = 0;
}

//let user1 = new User();
//user1.name = 'Juan';
//user1.age = 19;

let user2 = new User();
user2.name = 'Laura';
user2.age = 18;

user1.name = 'David';

logObject(user1);
logObject(user2);

console.log(user1.name);

class User {
    name: string;
    birthdate: Date;

    constructor(name: string, birthdate: Date) {
        this.name = name;
        this.birthdate = birthdate;
    }

    public getAge(): number {
        let years = new Date().getFullYear() - this.birthdate.getFullYear();
        return years;
    }
}

let user1 = new User('Juan', new Date('2004-29-06'));
user1.birthdate = new Date('2005-17-05');
user1.

logObject(user1);