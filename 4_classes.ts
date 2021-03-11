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

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getAge() {
    return this.age
  }

  set setAge(age: number) {
    this.age = age
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

// const rafs = new UserAccount('Rafael', 27);
// console.log(rafs);
// console.log(rafs.age);
// rafs.logDetails();

const wilian = new CharAccount('Willian', 30, 'wilmaster', 100);
console.log(wilian);
console.log(wilian.level);
wilian.logDetails();
wilian.logCharDetails();
wilian.setAge = 8000;
console.log(wilian.getAge);