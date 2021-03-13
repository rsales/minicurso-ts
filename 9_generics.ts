// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// type alias
type numOrStr = number | string

// function useState<S extends number|string>() {
function useState<S extends numOrStr = string >() {
  let state: S;

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState 
  }

  return { getState, setState };
}

const newState = useState();
// const newState = useState<string>();
// const newState = useState<boolean>();
// const newState = useState<string|number>();

// newState.setState(false); // é um boolean
// console.log(newState.getState());

newState.setState("foo"); // é uma string
console.log(newState.getState());

newState.setState(123); // de erro
console.log(newState.getState());

// newState.setState("bla");
// console.log(newState.getState());