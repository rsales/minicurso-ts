// Interfaces

// definição
interface GameI {
  title: string;
}

interface DLCI {
  extra: string;
}

// inteserção / extend
interface GameCollectionI extends GameI, DLCI {}

// implements
class CreateGameI implements GameCollectionI {
  title: string;
  extra: string;
}

// declarar função
interface getSimilarsI {
  (title: string): void;
}

// ================= Diferenças ================= //

interface IDI extends number {}

interface TupleI {
  0: number;
  1: number;
}

[1, 2, 3] as TupleI;

// Pode ter múltiplas declarações e ele une de mesmo nome

interface JQueryI {
  a: string;
}

interface JQueryI {
  b: string;
}

const $: JQueryI = {
  a: "bla",
  b: "foo",
}

// vantagem: quando tiver criando libs, prefira interfaces, porque são mais extensiveis!

// criando objetos/classes (POO)