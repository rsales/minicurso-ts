// Conjunto de dados para descrever a estutura de um objeto
// Focado em 'objetos'
interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genere: string;
  platform?: string[]; // optional
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  id: 123,
  title: "The Last of Us",
  description: "The best game in the world",
  genere: "Acions",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
}

console.log(tlou.genere);
tlou.getSimilars(tlou.title);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of US - Left Behind",
  description: "You play as Ellie before the original game",
  genere: "Actions",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new charaters"]
};
class CreateGame implements Game {
  title: string;
  description: string;
  genere: string;

  constructor(t: string, d:string, g: string) {
    this.title = t;
    this.description = d;
    this.genere = g;
  }
}